'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Testimonials() {
    const { t } = useLang();

    return (
        <section className="section section-testimonials" id="depoimentos" data-nav-theme="cream">
            <div className="container narrow center">
                <p className="eyebrow">{t.testimonials.eyebrow}</p>
                <h2 className="display">
                    {t.testimonials.titleA}<br />
                    <em>{t.testimonials.titleB}</em>
                </h2>
            </div>

            <div className="testimonials">
                {t.testimonials.list.map((item, i) => (
                    <blockquote key={i}>
                        <p>&ldquo;{item.quote}&rdquo;</p>
                        <footer>{item.author}</footer>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}
