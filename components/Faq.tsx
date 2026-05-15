'use client';

import { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';
import { useLang } from '@/lib/LanguageContext';

export default function Faq() {
    const { t } = useLang();
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="section section-faq" id="faq" data-nav-theme="sand">
            <div className="container narrow center">
                <p className="eyebrow">{t.faq.eyebrow}</p>
                <h2 className="display">
                    {t.faq.titleA}<br />
                    <em>{t.faq.titleB}</em>
                </h2>
            </div>

            <div className="faq-list">
                {t.faq.items.map((item, i) => {
                    const isOpen = open === i;
                    return (
                        <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={i}>
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => setOpen(isOpen ? null : i)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.q}</span>
                                <span className="faq-icon">
                                    {isOpen ? <LuMinus /> : <LuPlus />}
                                </span>
                            </button>
                            <div className="faq-a">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
