'use client';
import { useEffect, useState } from 'react';
import styles from './currentDate.module.scss';
import getCurrentDate from '@/services/getCurrentDate';

export default function CurrentDate() {
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        const result = getCurrentDate();
        setDate(result);
    },[]);

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Publicações</h1>
            {date !== '' && (
                <h2 className={styles.date}>{ date }</h2>
            )}
        </section>
    );
}