import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './MixItem.module.scss'
import { ArtistDesriptionMobile } from '../ArtistDesriptionMobile';

const MixItem = ({ item, description, setDescription, index }) => {
    const { date, artist } = item;
    const [open, setOpen] = useState(false);
    return (
        <div
            className={clsx(styles.mixItem, !!index ? '' : styles.mixItemActive)}
            onMouseEnter={() => setDescription(item)}
            onMouseLeave={() => setDescription(null)}
            onClick={() => {
                if (!open && description) {
                    setOpen(true);
                    return;
                }
                setDescription(null);
                setOpen(false);
            }}
        >
            <span className={styles.time}>{(date.getHours() < 10 ? '0' : '') + date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</span>
            -<span className={styles.artist}>{artist.toUpperCase()}</span>
            {(item.id === description?.id) && <ArtistDesriptionMobile mix={description} setOpen={setOpen} setDescription={setDescription} />}
        </div>
    )
}

export default MixItem;
