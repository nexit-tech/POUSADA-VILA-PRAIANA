'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [hide,    setHide]    = useState(false);
    const [unmount, setUnmount] = useState(false);

    useEffect(() => {
        // Trava o scroll enquanto o loading está visível
        document.documentElement.style.overflow = 'hidden';

        const t1 = setTimeout(() => setHide(true),    1700);
        const t2 = setTimeout(() => {
            setUnmount(true);
            document.documentElement.style.overflow = '';
        }, 2400);

        return () => {
            clearTimeout(t1); clearTimeout(t2);
            document.documentElement.style.overflow = '';
        };
    }, []);

    if (unmount) return null;

    return (
        <div className={`loading-screen${hide ? ' is-hidden' : ''}`} aria-hidden="true">
            <div className="loading-inner">
                <span className="loading-mark">POUSADA</span>
                <span className="loading-script">Vila Praiana</span>
                <span className="loading-line" />
                <span className="loading-tag">Arraial do Cabo</span>
            </div>
        </div>
    );
}
