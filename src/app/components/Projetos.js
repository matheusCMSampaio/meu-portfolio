"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Projetos() {
  const fetchRepositories = async () => {
    try {
      // Busca a lista de repositórios
      const reposResponse = await axios.get('https://api.github.com/users/matheusCMSampaio/repos');
      const repos = reposResponse.data;

      // Busca as linguagens para cada repositório
      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          try {
            const languagesResponse = await axios.get(`https://api.github.com/repos/matheusCMSampaio/${repo.name}/languages`);
            return {
              ...repo,
              languages: Object.keys(languagesResponse.data), // Lista de linguagens usadas
            };
          } catch (error) {
            console.error(`Erro ao buscar linguagens para ${repo.name}:`, error);
            return {
              ...repo,
              languages: [], // Retorna um array vazio se houver erro
            };
          }
        })
      );

      return reposWithLanguages;
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      return [];
    }
  };

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchRepositories().then(repos => setRepositories(repos));
  }, []);

  return (
    <section id="projetos" className={styles.section}>
      <h2 className={styles.heading}>Meus Projetos</h2>
      <div className={styles.projectsGrid}>
        {repositories.map((repo, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{repo.name}</h3>
            <p>{repo.description || 'Sem descrição'}</p>
            {repo.languages.length > 0 && (
              <p className={styles.languages}>
                Linguagens: {repo.languages.join(', ')}
              </p>
            )}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}