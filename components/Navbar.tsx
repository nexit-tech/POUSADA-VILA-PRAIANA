'use client';

import { useEffect, useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLang } from '@/lib/LanguageContext';

type Theme = 'cream' | 'sand' | 'navy';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [theme,    setTheme]    = useState<Theme>('navy');
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLang();

    useEffect(() => {
        const navHeight = 90;

        const update = () => {
            setScrolled(window.scrollY > 60);

            const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]');
            let current: Theme = 'navy';
            sections.forEach(sec => {
                const r = sec.getBoundingClientRect();
                if (r.top <= navHeight && r.bottom > navHeight) {
                    current = (sec.dataset.navTheme as Theme) || 'navy';
                }
            });
            setTheme(current);
        };

        update();
        window.addEventListener('scroll',  update, { passive: true });
        window.addEventListener('resize',  update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar theme-${theme}${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-inner">
                <a href="#" className="brand" onClick={closeMenu}>
                    <span className="brand-mark">POUSADA</span>
                    <span className="brand-script">Vila Praiana</span>
                </a>

                <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Navigation">
                    <a href="#experiencia" onClick={closeMenu}>{t.nav.experience}</a>
                    <a href="#suites"      onClick={closeMenu}>{t.nav.suites}</a>
                    <a href="#arraial"     onClick={closeMenu}>{t.nav.arraial}</a>
                    <a href="#faq"         onClick={closeMenu}>{t.nav.faq}</a>
                    <a href="#contato"     onClick={closeMenu}>{t.nav.contact}</a>
                </nav>

                <div className="nav-side">
                    <LanguageToggle />
                    <a href="#reservar" className="btn-reserve-top">{t.nav.reserve}</a>
                </div>

                <button
                    className="nav-toggle"
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen(o => !o)}
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}
