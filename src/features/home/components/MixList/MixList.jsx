import React from 'react';
import { DayItem } from '../DayItem';
import MixItem from '../MixItem/MixItem';

export const MixList = ({ items, setOnHoverItem }) => {

    const day = null;

    const renderDayItem = (date) => {
        if (date.getDay() !== day) {
            day = date.getDay();
            return <DayItem date={date} />
        }
    }

    return (
        <>
            {items.map((item) => {
                return (
                    <>
                        {renderDayItem(item.date)}
                        <MixItem
                            key={item.key}
                            item={item}
                            setOnHoverItem={setOnHoverItem} />
                    </>
                );
            })}
        </>
    );
};
