'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
    const [hide,    setHide]    = useState(false);
    const [unmount, setUnmount] = useState(false);

    useEffect(() => {
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
                <Image
                    src="/logo.png"
                    alt="Pousada Vila Praiana"
                    width={320}
                    height={320}
                    priority
                    className="loading-logo"
                />
                <span className="loading-line" />
                <span className="loading-tag">Arraial do Cabo</span>
            </div>
        </div>
    );
}
