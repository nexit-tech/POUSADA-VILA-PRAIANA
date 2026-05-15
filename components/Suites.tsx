'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';
import { bookingUrl } from '@/lib/links';

const R2 = 'https://pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev';

const suiteImages = [
    // [0] Standard Duplo
    { room: `${R2}/standard1.jpg`,  bathroom: `${R2}/standardbanheiro.jpg` },
    // [1] Quarto Família
    { room: `${R2}/familia2.jpg`,   bathroom: `${R2}/familiabanheiro.jpg`  },
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

            <div className="suites-grid suites-grid-2">
                {t.suites.list.map((s, i) => {
                    const imgs = suiteImages[i] ?? suiteImages[0];
                    return (
                        <article className="suite-card" key={s.title}>
                            <div className="suite-imgs">
                                <div className="suite-img-main">
                                    <Image
                                        src={imgs.room}
                                        alt={`${s.title} — quarto`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 30vw"
                                    />
                                </div>
                                <div className="suite-img-side">
                                    <Image
                                        src={imgs.bathroom}
                                        alt={`${s.title} — banheiro`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 18vw"
                                    />
                                </div>
                            </div>
                            <div className="suite-body">
                                <h3>{s.title}</h3>
                                <p className="suite-desc">{s.desc}</p>
                                <div className="suite-meta">
                                    <span>{s.meta}</span>
                                    <a
                                        href={bookingUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-gold"
                                    >
                                        {t.suites.reserve} →
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
