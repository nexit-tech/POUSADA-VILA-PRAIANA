'use client';

import Image from 'next/image';
import BookingWidget from './BookingWidget';
import { useLang } from '@/lib/LanguageContext';
import { bookingUrl } from '@/lib/links';

export default function Hero() {
    const { t } = useLang();

    return (
        <section className="hero" data-nav-theme="navy">
            <div className="hero-media">
                <Image
                    src="https://pub-04503d7ce2e34ce0a79adb19dd326408.r2.dev/capa.png"
                    alt="Pousada Vila Praiana — Arraial do Cabo"
                    fill
                    priority
                    fetchPriority="high"
                    quality={85}
                    sizes="100vw"
                    className="hero-img"
                />
                <div className="hero-overlay" />
            </div>

            <div className="hero-content">
                <p className="hero-eyebrow">{t.hero.location}</p>
                <h1 className="hero-title">
                    {t.hero.titleA} <em>{t.hero.titleB}</em>
                    <br />
                    {t.hero.titleC}
                </h1>
                <p className="hero-sub">{t.hero.sub}</p>

                <div className="hero-actions">
                    <a
                        href={bookingUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        {t.hero.reserve}
                    </a>
                    <a href="#experiencia" className="btn-ghost">{t.hero.discover}</a>
                </div>
            </div>

            <BookingWidget />

            <a href="#experiencia" className="hero-scroll" aria-label="Scroll">
                <span />
            </a>
        </section>
    );
}
