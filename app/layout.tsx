import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Allura } from 'next/font/google';
import { LanguageProvider } from '@/lib/LanguageContext';
import './globals.css';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--f-serif',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--f-sans',
    display: 'swap',
});

const allura = Allura({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--f-script',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Pousada Vila Praiana · Arraial do Cabo',
    description:
        'Pousada no coração de Arraial do Cabo, a 10 minutos a pé das três praias mais lindas — Prainha, Praia Grande e Praia dos Anjos. Café da manhã incluso e localização privilegiada.',
    icons: {
        icon: [
            { url: '/logo.png', type: 'image/png' },
        ],
        apple: '/logo.png',
    },
    openGraph: {
        title: 'Pousada Vila Praiana · Arraial do Cabo',
        description: 'Sua pousada no coração de Arraial do Cabo — a passos das três praias mais lindas.',
        url: 'https://pousadavilapraiana.com.br',
        siteName: 'Pousada Vila Praiana',
        locale: 'pt_BR',
        type: 'website',
        images: [{ url: '/logo.png', width: 800, height: 800 }],
    },
};

export const viewport: Viewport = {
    themeColor: '#0B2A4A',
    width: 'device-width',
    initialScale: 1,
};

const R2 = 'https://pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
            <head>
                {/* Conecta antecipadamente ao CDN das imagens — economiza DNS + TLS handshake */}
                <link rel="preconnect"   href={R2} crossOrigin="anonymous" />
                <link rel="dns-prefetch" href={R2} />

                {/* Pré-conecta também aos domínios secundários ainda usados (Unsplash p/ fotos do CTA bg) */}
                <link rel="dns-prefetch" href="https://images.unsplash.com" />

                {/* Pré-carrega a imagem do hero — começa a baixar logo após HTML, em paralelo com JS/CSS */}
                <link
                    rel="preload"
                    as="image"
                    href={`${R2}/capa.png`}
                    /* @ts-expect-error fetchpriority é HTML attr novo, JSX aceita */
                    fetchpriority="high"
                />
            </head>
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
