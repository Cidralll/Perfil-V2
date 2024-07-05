'use client';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export default function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header className={`${styles.header} ${top ? styles.colorOrange : styles.transparent }`}>
            <section className={styles.container}>
                <p className={`${styles.logo} ${top ? styles.logoWhite : styles.logoGray}`}>LC Page</p>
                <div className={`${styles.contentCircle} ${top ? styles.circleWhite : styles.circleOrange }`}>
                    <p>LC</p>
                </div>
            </section>
        </header>
    );
}