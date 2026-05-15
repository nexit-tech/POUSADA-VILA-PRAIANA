'use client';

import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { useLang } from '@/lib/LanguageContext';
import { SOCIAL, bookingUrl } from '@/lib/links';

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer" data-nav-theme="navy">
            <div className="footer-inner">
                <div className="footer-brand">
                    <Image
                        src="/logo.png"
                        alt="Pousada Vila Praiana"
                        width={260}
                        height={260}
                        className="brand-logo footer-logo"
                    />
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
                        <a href={bookingUrl()} target="_blank" rel="noopener noreferrer">
                            {t.footer.availability}
                        </a>
                        <a href="#contato">{t.footer.directContact}</a>
                        <a href="#faq">{t.footer.cancellation}</a>
                    </div>
                    <div>
                        <h5>{t.footer.socialTitle}</h5>
                        <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="footer-social">
                            <FaFacebookF aria-hidden /> <span>Facebook</span>
                        </a>
                        <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="footer-social">
                            <FaYoutube aria-hidden /> <span>YouTube</span>
                        </a>
                        <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" className="footer-social">
                            <FaTiktok aria-hidden /> <span>TikTok</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <small>{t.footer.copyright}</small>
            </div>
        </footer>
    );
}
