import React from 'react';
import styles from './Next.module.scss'

export const Next = ({ next }) => {
    return (
        <div className={styles.container}>
            {`COMING UP : ${next.toUpperCase() || '...'}`}
        </div>
    );
};