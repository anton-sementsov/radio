import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';

import { airtableDB } from '../../../../../lib/api';
import styles from './ProgressBar.module.scss';

export const ProgressBar = ({}) => {
  const [donates, setDonates] = useState({});

  useEffect(() => {
    airtableDB('donate')
      .select()
      .eachPage((records, fetchNextPage) => {
        setDonates({
          total: records[0]?.fields?.total,
          collected: records[0]?.fields?.collected,
        });
        fetchNextPage();
      });
  }, []);

  return (
    <div className={styles.progress}>
      <span>{donates?.collected}</span>
      <Line
        percent={(donates.collected * 100) / donates.total}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="#F6C20B"
        trailColor="transparent"
        style={{ border: '1px solid #F6C20B', borderRadius: '20px' }}
      />
    </div>
  );
};
