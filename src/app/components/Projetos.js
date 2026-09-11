"use client";

import styles from '../styles/Home.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJETOS = [
  {
    nome: 'Challenge Porto Seguro — API de Seguros de Bicicleta',
    descricao:
      'Desafio acadêmico em parceria com a Porto Seguro, desenvolvido ao longo de 4 sprints em equipe. API REST em Java para cadastro e gestão de seguros de bicicleta.',
    tecnologias: ['Java', 'Spring Boot', 'API REST'],
    destaque: true,
    github: 'https://github.com/matheusCMSampaio/java-brainstormers-porto-bike'
  },
  {
    nome: 'DirtyCode',
    descricao:
      'API em Spring Boot com machine learning para análise de dados e recomendação de produtos com base no perfil de compra do usuário. Deploy containerizado com Docker no Azure Container Registry.',
    tecnologias: ['Java', 'Spring Boot', 'Oracle DB', 'Docker', 'Azure'],
    github: 'https://github.com/matheusCMSampaio/DirtyCode'
  },
  {
    nome: 'Global Solution — Monitoramento com Sensores',
    descricao:
      'API em Spring Boot para gestão de sensores, alertas e relatórios em tempo real, com documentação interativa via Swagger.',
    tecnologias: ['Java', 'Spring Boot', 'Oracle DB', 'Swagger', 'Docker'],
    github: 'https://github.com/matheusCMSampaio/GlobalSolution-Java',
  },
  {
    nome: 'Genius — Jogo da Memória com Arduino',
    descricao:
      'Recriação do clássico jogo Genius/Simon em hardware: leitura de botões físicos, controle de LEDs e buzzer, com lógica de sequência e níveis de dificuldade programada em C/C++.',
    tecnologias: ['C/C++', 'Arduino', 'Eletrônica embarcada'],
    github: 'https://github.com/matheusCMSampaio/Projeto_Genius',
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <h2 className={styles.heading}>Meus Projetos</h2>
      <div className={styles.projectsGrid}>
        {PROJETOS.map((projeto) => (
          <div
            key={projeto.nome}
            className={`${styles.projectCard} ${projeto.destaque ? styles.projectCardDestaque : ''}`}
          >
            <h3 className={styles.projectTitle}>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>

            <div className={styles.heroStack}>
              {projeto.tecnologias.map((tech) => (
                <span key={tech} className={styles.stackBadge}>{tech}</span>
              ))}
            </div>

            <div className={styles.projectLinks}>
              {projeto.github && (
                <a href={projeto.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Ver no GitHub
                </a>
              )}
              {projeto.githubExtra && (
                <a href={projeto.githubExtra.url} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> {projeto.githubExtra.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
