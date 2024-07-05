'use client';
import { useEffect, useState } from 'react';
import styles from './footer.module.scss';

export default function Footer() {
    const [year, setYear] = useState<string>('');

    useEffect(() => {
        const date = new Date();
        setYear(`${ date.getFullYear() }`);
    },[]);

    return (
        <footer className={styles.footer}>
            <p>&copy; { year } LC Page</p>
            <p>Todos os direitos reservados</p>
        </footer>
    );
}