'use client';

import { useLang } from '@/lib/LanguageContext';
import { bookingUrl } from '@/lib/links';

export default function CtaFinal() {
    const { t } = useLang();

    return (
        <section className="section section-cta" data-nav-theme="navy">
            <div className="cta-inner">
                <p className="eyebrow light">{t.cta.eyebrow}</p>
                <h2 className="display light">
                    {t.cta.titleA} <em>{t.cta.titleB}</em>
                </h2>
                <ul className="cta-perks">
                    {t.cta.perks.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                <a
                    href={bookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary large"
                >
                    {t.cta.reserve}
                </a>
            </div>
        </section>
    );
}
