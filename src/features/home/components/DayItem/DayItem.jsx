import React from 'react';
import styles from './DayItem.module.scss'

export const DayItem = ({ date }) => {

    const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTHES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className={styles.dayItem}>
            {`${DAYS[date.getDay()]}, ${MONTHES[date.getMonth()].toUpperCase()} ${date.getDate()}`}
        </div>
    );
};