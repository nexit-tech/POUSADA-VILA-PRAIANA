'use client';

import type { IconType } from 'react-icons';
import { LuSailboat, LuSunset, LuFish, LuUtensilsCrossed } from 'react-icons/lu';
import { useLang } from '@/lib/LanguageContext';

const icons: IconType[] = [LuSailboat, LuSunset, LuFish, LuUtensilsCrossed];

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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                        alt="Arraial do Cabo"
                        className="ai-1"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80"
                        alt="Sunset"
                        className="ai-2"
                    />
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
