import React from 'react';
import { CURENT_ARTIST_ID, NEXT_ARTIST_ID } from '../constans';

export const RadioBossWidget = ({ }) => {
    return (
        <div style={{ color: 'transparent', fontSize: '0px' }}>
            <div id={CURENT_ARTIST_ID}></div>
            <div>
                <span id={NEXT_ARTIST_ID}>...</span>
            </div>
        </div>
    );
};