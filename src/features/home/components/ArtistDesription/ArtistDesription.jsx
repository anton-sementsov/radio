import React from 'react';
import clsx from 'clsx';
import styles from './ArtistDesription.module.scss'

export const ArtistDesription = ({ mix, mobile = false }) => {
    if (!mix) return <></>;
    const { img, description } = mix;
    return (
        <div style={{ display: mobile ? 'block !important' : ' ' }} className={styles.artistDesription} >
            <div>
                <img className={styles.image} src={img} />
                <span>{description?.toUpperCase()}</span>
            </div>
        </div>
    );
};