'use client';

import Image from 'next/image';
import type { IconType } from 'react-icons';
import { LuSailboat, LuSunset, LuFish, LuUtensilsCrossed } from 'react-icons/lu';
import { useLang } from '@/lib/LanguageContext';

const icons: IconType[] = [LuSailboat, LuSunset, LuFish, LuUtensilsCrossed];

const R2 = 'https://pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev';

const beaches = [
    { name: 'Prainha',         src: `${R2}/prainha.png`     },
    { name: 'Praia dos Anjos', src: `${R2}/anjos.png`       },
    { name: 'Praia Grande',    src: `${R2}/praia-grande.jpg`},
];

export default function Arraial() {
    const { t } = useLang();

    return (
        <section className="section section-arraial" id="arraial" data-nav-theme="navy">
            <div className="arraial-grid">
                <div className="arraial-text">
                    <p className="eyebrow light">{t.arraial.eyebrow}</p>
                    <h2 className="display light">
                        {t.arraial.titleA}
                        <br />
                        <em>{t.arraial.titleB}</em>
                    </h2>
                    <p className="lead light">{t.arraial.lead}</p>
                    <a href="#contato" className="btn-outline-light">{t.arraial.cta}</a>
                </div>

                <div className="arraial-imgs">
                    {beaches.map((b, i) => (
                        <div className={`beach-img beach-${i + 1}`} key={b.name}>
                            <Image
                                src={b.src}
                                alt={b.name}
                                fill
                                sizes="(max-width: 980px) 100vw, 30vw"
                            />
                            <span className="beach-label">{b.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="experiences">
                {t.arraial.experiences.map((exp, i) => {
                    const Icon = icons[i];
                    return (
                        <div className="exp-card" key={i}>
                            <Icon className="exp-icon" aria-hidden="true" />
                            <h4>{exp.title}</h4>
                            <p>{exp.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
