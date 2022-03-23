import React from 'react';
import MixItem from '../MixItem/MixItem';

export const MixList = ({ items }) => {
    console.log('items', items);
    return (
        <>
            {items.map((item) => <MixItem key={item.key} item={item} />)}
        </>
    );
};
