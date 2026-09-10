"use client";
import styles from '../styles/Home.module.css';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const STACK = ['Java', 'Spring Boot', 'React', 'React Native', 'Oracle DB', 'Docker', 'Azure DevOps'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.heroEyebrow}>Olá, eu sou</p>
      <h2 className={styles.heroName}>Matheus Sampaio</h2>
      <p className={styles.heroRole}>Desenvolvedor Full Stack (Java + React)</p>

      <div className={styles.heroStack}>
        {STACK.map((tech) => (
          <span key={tech} className={styles.stackBadge}>{tech}</span>
        ))}
      </div>

      <div className={styles.heroCtas}>
        <a
          href="/curriculo-matheus-sampaio.pdf"
          download
          className={styles.ctaPrimary}
        >
          <FaFileDownload /> Baixar currículo
        </a>
        <a
          href="https://www.linkedin.com/in/matheuscmsamp/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/matheusCMSampaio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSecondary}
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
