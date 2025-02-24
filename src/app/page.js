"use client";

import { useState } from 'react';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/Home.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('sobre'); // Estado para controlar a aba ativa
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu móvel

  const tabs = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ];

  // Animações para as transições entre abas
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const pageTransition = {
    type: 'tween',
    duration: 0.5,
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meu Portfólio</h1>
        {/* Abas fixas para desktop (telas grandes) */}
        <nav className={styles.desktopTabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {/* Ícone de menu para mobile (telas pequenas) */}
        <button 
          className={styles.menuIcon} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu de navegação"
        >
          <FaBars size={24} color="#fff" />
        </button>
      </header>
      {/* Menu móvel (dropdown) para telas pequenas */}
      {isMenuOpen && (
        <nav className={styles.mobileTabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMenuOpen(false); // Fecha o menu ao selecionar uma aba
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'sobre' && (
            <motion.section
              key="sobre"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className={styles.section}
            >
              <Sobre />
            </motion.section>
          )}
          {activeTab === 'projetos' && (
            <motion.section
              key="projetos"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className={styles.section}
            >
              <Projetos />
            </motion.section>
          )}
          {activeTab === 'contato' && (
            <motion.section
              key="contato"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className={styles.section}
            >
              <Contato />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}