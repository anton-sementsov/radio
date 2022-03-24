import React from 'react'
import styles from './MixItem.module.scss'

const MixItem = ({ item, setOnHoverItem }) => {
    const { date, artist } = item;
    return (
        <div
            className={styles.mixItem}
            onMouseEnter={() => setOnHoverItem(item)}
            onMouseLeave={() => setOnHoverItem(null)}>
            <span className={styles.time}>{(date.getHours() < 10 ? '0' : '') + date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</span>
            -<span className={styles.artist}>{artist.toUpperCase()}</span>
        </div>
    )
}

export default MixItem;
