'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer" data-nav-theme="navy">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="brand-mark">POUSADA</span>
                    <span className="brand-script">Vila Praiana</span>
                    <p>{t.footer.tagline}</p>
                </div>
                <div className="footer-cols">
                    <div>
                        <h5>{t.footer.navTitle}</h5>
                        <a href="#experiencia">{t.nav.experience}</a>
                        <a href="#suites">{t.nav.suites}</a>
                        <a href="#arraial">{t.nav.arraial}</a>
                    </div>
                    <div>
                        <h5>{t.footer.reserveTitle}</h5>
                        <a href="#reservar">{t.footer.availability}</a>
                        <a href="#contato">{t.footer.directContact}</a>
                        <a href="#">{t.footer.cancellation}</a>
                    </div>
                    <div>
                        <h5>{t.footer.socialTitle}</h5>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">TripAdvisor</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <small>{t.footer.copyright}</small>
            </div>
        </footer>
    );
}
