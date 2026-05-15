'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        const selector =
            '.display, .lead, .feature, .suite-card, .exp-card, .testimonials blockquote, .arraial-imgs, .cta-perks, .map-wrapper';
        const els = document.querySelectorAll<HTMLElement>(selector);
        els.forEach(el => el.classList.add('reveal'));

        const io = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    return null;
}
