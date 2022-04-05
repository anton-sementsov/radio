import React from 'react';
import { ArtistDesriptionMobile } from '../../../ArtistDesriptionMobile';
import styles from './OnAir.module.scss';

export const OnAir = ({ artist }) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <strong>•</strong> <span>ON AIR</span>
            </div>
            <div className={styles.artist}>{artist.toUpperCase()}</div>
        </div>
    );
};