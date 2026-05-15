'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Contact() {
    const { t } = useLang();

    return (
        <section className="section section-contact" id="contato" data-nav-theme="sand">
            <div className="contact-grid">
                <div>
                    <p className="eyebrow">{t.contact.eyebrow}</p>
                    <h2 className="display">{t.contact.title}</h2>
                    <address>
                        {t.contact.street}<br />
                        {t.contact.neighborhood}<br /><br />
                        <a href="tel:+5522999999999">+55 (22) 99999-9999</a><br />
                        <a href="mailto:reservas@vilapraiana.com.br">reservas@vilapraiana.com.br</a>
                    </address>
                </div>

                <div className="map-wrapper">
                    <span className="map-pin">{t.contact.pin}</span>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5!2d-42.025!3d-22.966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzU3LjYiUyA0MsKwMDEnMzAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        title="Localização Pousada Vila Praiana"
                    />

                    <a
                        className="map-cta"
                        href="https://www.google.com/maps/search/?api=1&query=Arraial+do+Cabo+RJ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.contact.cta}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
