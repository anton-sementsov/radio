import React from 'react';

import styles from './ArtistDesriptionMobile.module.scss';

export const ArtistDesriptionMobile = ({ mix, setOpen, setDescription }) => {
  if (!mix) return <></>;
  const { img, description } = mix;
  return (
    <div
      className={styles.artistDesription}
      onClick={() => {
        setOpen(false);
        setDescription(null);
      }}
    >
      <div>
        <img className={styles.image} src={img} />
        <span>{description?.toUpperCase()}</span>
      </div>
    </div>
  );
};
