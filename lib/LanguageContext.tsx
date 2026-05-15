'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dict, type Lang, type Translation } from './i18n';

type Ctx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: Translation;
};

const LanguageContext = createContext<Ctx>({
    lang:    'pt',
    setLang: () => {},
    t:       dict.pt,
});

const isLang = (v: unknown): v is Lang => v === 'pt' || v === 'en' || v === 'es';

const htmlLang = (l: Lang) => (l === 'en' ? 'en' : l === 'es' ? 'es' : 'pt-BR');

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('pt');

    useEffect(() => {
        const saved = localStorage.getItem('vp-lang');
        if (isLang(saved)) setLangState(saved);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        try { localStorage.setItem('vp-lang', l); } catch {}
        if (typeof document !== 'undefined') document.documentElement.lang = htmlLang(l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);
