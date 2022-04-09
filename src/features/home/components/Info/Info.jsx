import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@radio/components/Button';
import { ProgressBar } from './ProgressBar';
import fbIcon from '@radio/assets/icons/facebook_blue.png';
import instaIcon from '@radio/assets/icons/insta.png';
import telegramIcon from '@radio/assets/icons/telegram.png';
import logo from '@radio/assets/icons/logo.png';
import { PayModal } from '../PayModal';
import styles from './Info.module.scss';

export const Info = ({ }) => {

    const [payModal, setPayModal] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo.src} alt='logo' layout='intrinsic' width="420px" height="300px" />
            </div>
            <p>
                {'Except guns and bombs, the main weapons of the enemy are fear and anxiety.'.toUpperCase()} <br />
                {'They poison our thoughts, destroy our strength and oppresses our heart.'.toUpperCase()}
            </p>
            <p>
                {'We believe that music is an instrument of peace, a medicine, which power can be felt by everyone and can help to find faith, hope and peace in this world again'.toUpperCase()} <br />
            </p>
            <p>
                {'We invite artists from all over the world to sow Grains of Peace to support the spirit of our country, fill souls with light and fill the future with meaning'.toUpperCase()} <br />
            </p>
            <p >
                {'Listen to music and stand with Ukraine 🇺🇦'.toUpperCase()} <br />
            </p>
            <p style={{ paddingTop: '20px', maxWidth: '620px', fontFamily: 'ScaniaSansBold', color: '#ffffff' }}>
                {'Our goal is $100 000 for humanitarian needs: this funds will be transfered to '.toUpperCase()}
                <a style={{ textDecoration: 'underline' }}
                    href='https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi'>
                    {'NBU Fundraising Account for Humanitarian Assistance'.toUpperCase()}</a>,
                <a style={{ textDecoration: 'underline' }}
                    href='https://www.kmu.gov.ua/gromadskosti/fondi-vidnovlennya-ukrayini/destroyed-infrastructure-fund-vidnovlennya-infrastrukturi'
                >
                    {' Destroyed Property and Infrastructure Restoration Fund'.toUpperCase()}</a>
                {' and friends-volunteers who are fighting back the occupier in different Ukrainian cities.'.toUpperCase()} <br />
            </p>
            <div style={{ marginTop: '35px' }}>
                <ProgressBar />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button label='DONATE' onClick={() => setPayModal(true)} />
            </div>
            <p style={{ marginTop: '15px', fontFamily: 'ScaniaSansBold' }}>
            SUBSCRIBE:
            </p>

            <div style={{ paddingTop: '10px' }}>
                <a href="https://www.facebook.com/20ftradio/" target="_blank" style={{ padding: '0 7px', }} rel="noreferrer">
                    <Image src={fbIcon.src} alt='' width='20' height='20' />
                </a>
                <a href="https://www.instagram.com/20ftradio/" target="_blank" style={{ padding: '0 7px', }} rel="noreferrer">
                    <Image src={instaIcon.src} alt='' width='20' height='20' />
                </a>
                <a href="https://t.me/twentyfeet" target="_blank" style={{ padding: '0 7px', }} rel="noreferrer">
                    <Image src={telegramIcon.src} alt='' width='20' height='20' />
                </a>
            </div>

            <PayModal payModal={payModal} setPayModal={setPayModal} />
        </div>
    );
};