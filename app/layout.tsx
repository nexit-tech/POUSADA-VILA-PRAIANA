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
        'Pousada Vila Praiana — refúgio boutique à beira-mar em Arraial do Cabo. Reserve sua experiência diretamente conosco com o melhor preço garantido.',
};

export const viewport: Viewport = {
    themeColor: '#0B2A4A',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${allura.variable}`}>
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
