'use client';

import { useLang } from '@/lib/LanguageContext';
import type { Lang } from '@/lib/i18n';

const langs: Lang[] = ['pt', 'en', 'es'];

export default function LanguageToggle() {
    const { lang, setLang } = useLang();

    return (
        <div className="lang-toggle" role="group" aria-label="Language">
            {langs.map((l, i) => (
                <span key={l} className="lang-cell">
                    <button
                        type="button"
                        className={lang === l ? 'is-active' : ''}
                        onClick={() => setLang(l)}
                        aria-pressed={lang === l}
                    >
                        {l.toUpperCase()}
                    </button>
                    {i < langs.length - 1 && <span className="lang-sep">/</span>}
                </span>
            ))}
        </div>
    );
}
