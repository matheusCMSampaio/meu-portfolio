"use client"; 
import styles from '../styles/Home.module.css';

export default function Contato() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Contato</h2>
      <p className={styles.contact}>
        Entre em contato comigo:  
        - Email: <a href="mailto:matheuschagas415@gmail.com" className={styles.link}>matheuschagas415@gmail.com</a>  
        - Telefone: (+11) 98973-1278  
        - LinkedIn: <a href="https://www.linkedin.com/in/matheuscmsamp/" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin.com/in/matheuscmsamp/</a>
      </p>
    </section>
  );
}