import React from 'react';
import styles from './OnAir.module.scss';

export const OnAir = ({ artist }) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <strong className={styles.blink}>•</strong> <span>ON AIR</span>
            </div>
            <div className={styles.artist}>{artist.toUpperCase()}</div>
        </div>
    );
};