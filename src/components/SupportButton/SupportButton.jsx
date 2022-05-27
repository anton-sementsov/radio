import Image from 'next/image';
import React from 'react';

import Img from '../../assets/images/support-sticker.png';
import styles from './SupportButton.module.scss';

export const SupportButton = ({}) => {
  return (
    <a
      className={styles.button}
      href="https://everpress.com/profile/20ft-radio
    "
      target="_blank"
      rel="noreferrer"
    >
      <Image src={Img.src} alt="#" layout="fill" />
    </a>
  );
};
