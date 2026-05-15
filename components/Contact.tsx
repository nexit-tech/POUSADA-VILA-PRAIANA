'use client';

import { useLang } from '@/lib/LanguageContext';
import { CONTACT } from '@/lib/links';

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
                        <a href={`tel:+${CONTACT.phone}`}>{CONTACT.phoneFmt}</a><br />
                        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </address>
                </div>

                <div className="map-wrapper">
                    <span className="map-pin">{t.contact.pin}</span>

                    <iframe
                        src="https://maps.google.com/maps?q=Pra%C3%A7a%20da%20Independ%C3%AAncia%2C%2018%20-%20Centro%2C%20Arraial%20do%20Cabo%20-%20RJ%2C%2028930-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        title="Localização Pousada Vila Praiana"
                    />

                    <a
                        className="map-cta"
                        href="https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+da+Independ%C3%AAncia%2C+18+-+Centro%2C+Arraial+do+Cabo+-+RJ%2C+28930-000"
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
