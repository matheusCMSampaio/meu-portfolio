"use client";

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const CONTATOS = [
  {
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'matheuschagas415@gmail.com',
    href: 'mailto:matheuschagas415@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Telefone',
    value: '(11) 98973-1278',
    href: 'tel:+5511989731278',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/matheuscmsamp',
    href: 'https://www.linkedin.com/in/matheuscmsamp/',
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/matheusCMSampaio',
    href: 'https://github.com/matheusCMSampaio',
    external: true,
  },
];

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const texto = `Olá, Matheus!

Meu nome é ${nome}.
E-mail: ${email}

Mensagem:
${mensagem}

Enviado através do seu portfólio.`;

    // Seu número de WhatsApp
    const telefone = '5511989731278';

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section id="contato" className={styles.section}>
      <h2 className={styles.heading}>Contato</h2>

      <p className={styles.contactIntro}>
        Vamos conversar? Entre em contato comigo através de qualquer uma das opções abaixo.
      </p>

      <div className={styles.contactGrid}>
        {CONTATOS.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={styles.contactCard}
          >
            <Icon className={styles.contactIcon} />

            <div>
              <span className={styles.contactLabel}>{label}</span>
              <span className={styles.contactValue}>{value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* FORMULÁRIO */}
      <div className={styles.contactFormContainer}>
        <h3>Fale comigo</h3>

        <p>
          Está interessado no meu perfil? Envie uma mensagem diretamente pelo WhatsApp.
        </p>

        <form onSubmit={enviarWhatsApp} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome</label>

            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              placeholder="seuemail@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem</label>

            <textarea
              id="mensagem"
              placeholder="Olá, Matheus! Vi seu portfólio e gostaria de conversar sobre uma oportunidade..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={6}
              required
            />
          </div>

          <button type="submit" className={styles.whatsappButton}>
            <FaWhatsapp />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}