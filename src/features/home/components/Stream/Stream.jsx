import React, { useState, useEffect } from 'react';
import { airtableDB } from '../../../../lib/api';
import { OnAir } from './components/OnAir/OnAir';
import { Next } from './components/Next/Next';
import { Description } from './components/Description';
import styles from './Steam.module.scss'

export const Stream = ({ }) => {

    const CURENT_ARTIST_ID = 'rbcloud_nowplaying15216'
    const NEXT_ARTIST_ID = 'rbcloud_nexttrack15216'

    const [data, setData] = useState({ artist: '', next: '' });;
    useEffect(() => {
        setTimeout(udpateData, 1000);
        setInterval(udpateData, 60000);
    }, []);

    const udpateData = () => {
        const artist = document.getElementById(CURENT_ARTIST_ID).innerHTML;
        const nextArtist = document.getElementById(NEXT_ARTIST_ID).innerHTML;

        airtableDB("mixesStream")
            .select()
            .eachPage((records, fetchNextPage) => {
                const mix = records.filter((record) => {
                    return record?.fields?.artist?.toUpperCase() == artist?.toUpperCase()
                });
                setData({
                    ...data,
                    ...mix[0]?.fields,
                    img: mix[0]?.fields?.img[0].url,
                    next: nextArtist,
                    artist: artist
                });
            })
    }

    return (
        <div className={styles.timeline}>
            <div className={styles.container}>
                <div style={{ color: 'transparent', fontSize: '0px' }}>
                    <div id={CURENT_ARTIST_ID}></div>
                    <div><span id={NEXT_ARTIST_ID}>...</span></div>
                </div>
                <OnAir artist={data?.artist} />
                <Next next={data?.next} />
                <Description data={data} />

                <p style={{ marginTop: '50px', minWidth:'400px', color: '#ffffff', textAlign: 'center' }}>
                    WANT TO PARTICIPATE? SEND YOUR
                    <br />
                    PEACEFUL MiX TO  <a style={{ color: '#FECE4D' }} href="mailto:20ftradio@gmail.com">20FTRADIO@GMAIL.COM</a>
                </p>
            </div>
        </div>
    );
};
