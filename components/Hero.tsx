'use client';

import BookingWidget from './BookingWidget';
import { useLang } from '@/lib/LanguageContext';

export default function Hero() {
    const { t } = useLang();

    return (
        <section className="hero" data-nav-theme="navy">
            <div className="hero-media">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-tropical-beach-3633/1080p.mp4"
                        type="video/mp4"
                    />
                </video>
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
                    <a href="#reservar"    className="btn-primary">{t.hero.reserve}</a>
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
