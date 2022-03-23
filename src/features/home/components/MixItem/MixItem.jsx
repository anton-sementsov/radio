import React from 'react'
import styles from './MixItem.module.scss'

const MixItem = ({ item }) => {
    const { date, artist } = item;
    return (
        <div className={styles.mixItem}>
            {(date.getHours() < 10 ? '0' : '') + date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()} - {artist}
        </div>
    )
}

export default MixItem;
