import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}
