import styles from '../styles/Home.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <h2 className={styles.heading}>Sobre Mim</h2>
      <p>
        Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP, turma
        de 2024. Ao longo do curso fui me aproximando cada vez mais do
        backend, principalmente Java e Spring Boot, mas também mexi bastante
        com React e React Native em alguns projetos. Depois de formado,
        entrei na V1TTA como assistente de e-commerce, e isso acabou me
        ajudando a enxergar o outro lado: não adianta só o código funcionar,
        ele precisa resolver um problema real pro negócio.
      </p>
      <p>
        O projeto que mais me marcou na faculdade foi o Challenge com a Porto
        Seguro. Foram 4 sprints desenvolvendo uma API REST em Java pra gestão
        de seguros de bicicleta, e foi ali que aprendi na prática como é
        trabalhar em equipe, lidar com prazo e entregar algo que realmente
        funciona.
      </p>
      <p>
        Hoje estou procurando uma oportunidade pra colocar tudo isso em
        prática de verdade, num time onde eu possa continuar aprendendo.
        Curto resolver problema, testar coisa nova e não ter medo de quebrar
        a cabeça até achar a solução.
      </p>
    </section>
  );
}
