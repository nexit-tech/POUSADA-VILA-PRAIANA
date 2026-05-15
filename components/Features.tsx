'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Features() {
    const { t } = useLang();

    return (
        <section className="section section-intro" id="experiencia" data-nav-theme="cream">
            <div className="container narrow center">
                <p className="eyebrow">{t.features.eyebrow}</p>
                <h2 className="display">
                    {t.features.titleA}<br />
                    <em>{t.features.titleB}</em>
                </h2>
                <p className="lead">{t.features.lead}</p>
            </div>

            <div className="container features">
                {t.features.items.map((f, i) => (
                    <div className="feature" key={i}>
                        <div className="feature-num">{String(i + 1).padStart(2, '0')}</div>
                        <h3>{f.title}</h3>
                        <p>{f.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
