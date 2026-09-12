// app/layout.js
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://portfolio-matheuscmsampaios-projects.vercel.app'),
  title: 'Matheus Sampaio | Desenvolvedor Full Stack (Java + React)',
  description:
    'Portfólio de Matheus Sampaio, desenvolvedor Full Stack especializado em Java, Spring Boot e React. Confira projetos, stack técnica e formas de contato.',
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
      'Confira meus projetos, stack técnica e formas de contato neste portfólio.',
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
      'Confira meus projetos, stack técnica e formas de contato neste portfólio.',
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