'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useLang } from '@/lib/LanguageContext';
import { CONTACT } from '@/lib/links';

type Theme = 'cream' | 'sand' | 'navy';

export default function WhatsAppFloat() {
    const { t } = useLang();
    const [theme, setTheme] = useState<Theme>('navy');

    useEffect(() => {
        // Detecta qual seção está atrás do botão (canto inferior direito)
        const update = () => {
            const probeY = window.innerHeight - 60;
            const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]');
            let current: Theme = 'navy';
            sections.forEach(sec => {
                const r = sec.getBoundingClientRect();
                if (r.top <= probeY && r.bottom > probeY) {
                    current = (sec.dataset.navTheme as Theme) || 'navy';
                }
            });
            setTheme(current);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const text = encodeURIComponent(t.whatsapp.contactMsg);

    return (
        <a
            href={`https://wa.me/${CONTACT.phone}?text=${text}`}
            className={`wa-float theme-${theme}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
        >
            <FaWhatsapp className="wa-icon" aria-hidden="true" />
            <span className="wa-pulse" aria-hidden="true" />
        </a>
    );
}
