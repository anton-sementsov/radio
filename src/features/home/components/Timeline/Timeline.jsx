import { airtableDB } from '../../../../lib/api';
import React, { useEffect, useState } from 'react';
import { MixList } from '../MixList';
import { ArtistDesription } from '../ArtistDesription';
import styles from './Timeline.module.scss';

export const Timeline = () => {

  const [mixes, setMixes] = useState([]);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    airtableDB("mixes")
      .select()
      .eachPage((records, fetchNextPage) => {
        const result = records
          .map(({ fields }) => ({
            ...fields,
            img: fields?.img ? fields?.img[0]?.url : '',
            date: new Date(fields?.date)
          }))
          .filter((item) => {
            const HOUR = 3600000;
            const duration = 60000 * item?.duration || HOUR;
            return item?.date.getTime() + duration > Date.now();
          })
          .sort((a, b) => a.date - b.date)
        setMixes(result);
        fetchNextPage();
      });
  }, []);


  return (
    <div className={styles.timeline}>
      <MixList items={mixes} description={description} setDescription={setDescription} />
      <ArtistDesription mix={description} />
    </div>
  )
}
