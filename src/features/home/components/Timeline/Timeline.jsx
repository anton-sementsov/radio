import React, { useEffect, useState } from 'react';

import { airtableDB } from '../../../../lib/api';
import { TABS } from '../constans';
import { ArtistDesription } from './ArtistDesription';
import { MixList } from './MixList';
import styles from './Timeline.module.scss';

export const Timeline = ({ setTab }) => {
  const [mixes, setMixes] = useState([]);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    airtableDB('mixes')
      .select()
      .eachPage((records, fetchNextPage) => {
        const result = records
          .map(({ fields }) => ({
            ...fields,
            img: fields?.img ? fields?.img[0]?.url : '',
            date: new Date(fields?.date),
          }))
          .filter((item) => {
            const HOUR = 3600000;
            const duration = 60000 * item?.duration || HOUR;
            return item?.date.getTime() + duration > Date.now();
          })
          .sort((a, b) => a.date - b.date);
        setMixes(result);
        fetchNextPage();
      });
  }, []);

  return (
    <div className={styles.timeline}>
      <div className={styles.switchButton}
        onClick={() => setTab(TABS.player)}>SCHEDULE</div>
      <MixList
        items={mixes}
        description={description}
        setDescription={setDescription}
      />

      <ArtistDesription mix={description} />

    </div>
  );
};
