// app/layout.js
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://portfolio-matheuscmsampaios-projects.vercel.app'),
  title: 'Matheus Sampaio | Desenvolvedor Full Stack (Java + React)',
  description:
    'Sou o Matheus, desenvolvedor Full Stack com foco em Java e Spring Boot. Aqui você encontra os projetos que já fiz, as tecnologias que uso e um jeito rápido de falar comigo.',
  keywords: [
    'Matheus Sampaio',
    'Desenvolvedor Java',
    'Desenvolvedor Full Stack',
    'Spring Boot',
    'React',
    'Portfólio desenvolvedor',
  ],
  openGraph: {
    title: 'Matheus Sampaio | Desenvolvedor Full Stack (Java + React)',
    description:
      'Meus projetos, as tecnologias que uso no dia a dia e um jeito rápido de entrar em contato comigo.',
    url: 'https://portfolio-matheuscmsampaios-projects.vercel.app',
    siteName: 'Matheus Sampaio - Portfólio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Matheus Sampaio - Desenvolvedor Full Stack (Java + React)',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Sampaio | Desenvolvedor Full Stack (Java + React)',
    description:
      'Meus projetos, as tecnologias que uso no dia a dia e um jeito rápido de entrar em contato comigo.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}