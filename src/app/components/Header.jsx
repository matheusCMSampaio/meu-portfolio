// app/components/Header.js
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Portfólio</h1>
      <nav>
        <a href="#sobre" className={styles.navLink}>Sobre</a>
        <a href="#projetos" className={styles.navLink}>Projetos</a>
        <a href="#contato" className={styles.navLink}>Contato</a>
      </nav>
    </header>
  );
}