import React from 'react';
import styles from './ArtistDesription.module.scss'

export const ArtistDesription = ({ mix }) => {
    if (!mix) return <></>;
    const { img, description } = mix;
    return (
        <div className={styles.artistDesription} >
            <div>
                <img className={styles.image} src={img} />
                <span>{description.toUpperCase()}</span>
            </div>
        </div>
    );
};