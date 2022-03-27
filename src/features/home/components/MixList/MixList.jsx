import React from 'react';
import { DayItem } from '../DayItem';
import styles from './Mix.module.scss';
import MixItem from '../MixItem/MixItem';


export const MixList = ({ items, setDescription, description }) => {
    const day = null;

    const renderDayItem = (date) => {
        if (date.getDay() !== day) {
            day = date.getDay();
            return <DayItem date={date} />
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            {renderDayItem(item.date)}
                            <MixItem
                                index={index}
                                description={description}
                                item={item}
                                setDescription={setDescription} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
