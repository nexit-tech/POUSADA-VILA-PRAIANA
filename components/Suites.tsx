'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';

const images = [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
];

export default function Suites() {
    const { t } = useLang();

    return (
        <section className="section section-suites" id="suites" data-nav-theme="sand">
            <div className="container narrow center">
                <p className="eyebrow">{t.suites.eyebrow}</p>
                <h2 className="display">
                    {t.suites.titleA} <em>{t.suites.titleB}</em>
                    <br />
                    {t.suites.titleC}
                </h2>
            </div>

            <div className="suites-grid">
                {t.suites.list.map((s, i) => (
                    <article className="suite-card" key={s.title}>
                        <div className="suite-img">
                            <Image
                                src={images[i]}
                                alt={s.title}
                                fill
                                sizes="(max-width: 980px) 100vw, 33vw"
                            />
                        </div>
                        <div className="suite-body">
                            <h3>{s.title}</h3>
                            <p className="suite-desc">{s.desc}</p>
                            <div className="suite-meta">
                                <span>{s.meta}</span>
                                <a href="#reservar" className="link-gold">{t.suites.reserve} →</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
