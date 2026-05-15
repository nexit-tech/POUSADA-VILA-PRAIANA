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

    // Trava o scroll do body quando o menu mobile está aberto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Fecha o menu se a tela for ampliada para desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 980) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const navClass = [
        'navbar',
        `theme-${theme}`,
        scrolled  ? 'scrolled'  : '',
        menuOpen  ? 'menu-open' : '',
    ].filter(Boolean).join(' ');

    return (
        <header className={navClass}>
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

                    {/* Rodapé do menu mobile — visível só quando aberto em telas pequenas */}
                    <div className="nav-links-foot">
                        <LanguageToggle />
                        <a href="#reservar" className="btn-primary" onClick={closeMenu}>
                            {t.hero.reserve}
                        </a>
                    </div>
                </nav>

                <div className="nav-side">
                    <LanguageToggle />
                    <a href="#reservar" className="btn-reserve-top">{t.nav.reserve}</a>
                </div>

                <button
                    type="button"
                    className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}
