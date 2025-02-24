// app/components/Contato.js
import styles from '../styles/Home.module.css';

export default function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contato</h2>
      <p className={styles.contact}>Entre em contato comigo: seuemail@exemplo.com | (seu telefone) | [seu LinkedIn]</p>
    </section>
  );
}