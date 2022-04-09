import React from 'react';
import Modal from 'react-modal';

import styles from './PayModal.module.scss';

export const PayModal = ({ setPayModal, payModal }) => {
  return (
    <Modal
      isOpen={payModal}
      onRequestClose={() => setPayModal(false)}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h1>SUPPORT UKRAINE</h1>
      <p>
        All funds collected during the Grains of Peace campaign will be
        transferred to{' '}
        <a
          target="_blank"
          href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi"
          rel="noreferrer"
        >
          NBU Fundraising Account for Humanitarian Assistance{', '}
        </a>
        <a
          target="_blank"
          href="https://www.kmu.gov.ua/gromadskosti/fondi-vidnovlennya-ukrayini/destroyed-infrastructure-fund-vidnovlennya-infrastrukturi"
          rel="noreferrer"
        >
          Destroyed Property and Infrastructure Restoration Fund
        </a>{' '}
        and friends-volunteers who are fighting back against the occupier in
        different Ukrainian cities.
      </p>
      <p>Listen to music and stay with Ukraine 🇺🇦</p>
      <button className={styles.modalClose} onClick={() => setPayModal(false)}>
        X
      </button>

      <div className={styles.button} style={{}}>
        <a
          target="_blank"
          href="https://send.monobank.com.ua/qCJaUtwX?fbclid=IwAR32Az5jdoBwjjNg3rxaDsUTdqipFKPfaCdQ6TtWQRMI0E4dm1yc5Wi2a7M"
          className={styles.buttonLink}
          rel="noreferrer"
        >
          MONOBANK
        </a>
        <a
          target="_blank"
          href="https://www.paypal.com/donate/?hosted_button_id=FARF8CJJPJMQS"
          className={styles.buttonLink}
          rel="noreferrer"
        >
          PAYPAL
        </a>
      </div>
    </Modal>
  );
};
