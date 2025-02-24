"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Projetos() {
  const fetchRepositories = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/matheusCMSampaio/repos');
      return response.data;
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
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}