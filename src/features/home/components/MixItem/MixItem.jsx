import React from 'react'
import clsx from 'clsx'
import styles from './MixItem.module.scss'

const MixItem = ({ item, setOnHoverItem, index }) => {
    const { date, artist } = item;
    return (
        <div
            className={clsx(styles.mixItem, !!index ? '' : styles.mixItemActive)}
            
            onMouseEnter={() => setOnHoverItem(item)}
            onMouseLeave={() => setOnHoverItem(null)}>
            <span className={styles.time}>{(date.getHours() < 10 ? '0' : '') + date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</span>
            -<span className={styles.artist}>{artist.toUpperCase()}</span>
        </div>
    )
}

export default MixItem;
