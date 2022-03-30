
import { Timeline } from '../features/home/components/Timeline';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '../components/Button';
import logo from '../assets/images/logo.png';
import fbIcon from '../assets/images/facebook_blue.png';
import twitterIcon from '../assets/images/twietter_blue.png';
import { ProgressBar } from '../features/home/components/ProgressBar';
import { CommentStripe } from '../features/home/components/CommentStripe';
import { PayModal } from '../features/home/components/PayModal';
import { FacebookShareButton, TwitterShareButton, TwitterIcon } from "react-share";
import styles from '../styles/Home.module.scss'
import { SEO } from '../utils/seo';
import { useState } from 'react';
import Modal from 'react-modal';

export default function Home() {

  const [payModal, setPayModal] = useState(false);

  const seo = {
    title: 'Grains of Peace on 20ft Radio',
    content: 'We believe that music is an instrument of peace, a medicine, which power can be felt by everyone and can help to find faith, hope and peace in this world again.',
    image: '../assets/images/social2.jpeg',
    url: 'https://www.20ftradio.net/grains-of-peace',
  }

  return (
    <div >
      <Head>
        <title>Grains of peace</title>
        <SEO seo={seo} />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
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
              SHARE:
            </p>

            <div style={{ paddingTop: '10px' }}>

              <FacebookShareButton
                url={seo.url}
                quote={seo.title}
                description={seo.description}
                className="Demo__some-network__share-button"
              >
                <Image src={fbIcon.src} alt='' width='20' height='20' />
              </FacebookShareButton>

              <span style={{ padding: '0 7px' }}>
                <TwitterShareButton
                  title={seo.title}
                  url={seo.url}
                >
                  <Image src={twitterIcon.src} alt='' width='20' height='20' />

                </TwitterShareButton>
              </span>
              {/*<FacebookShareButton
                url={seo.url}
                quote={seo.title}
                description={seo.description}
                className="Demo__some-network__share-button"
              >
                <Image src={shareIcon.src} alt='' width='20' height='20' />

              </FacebookShareButton>*/}
            </div>


            <p style={{ marginTop: '15px' }}>
              WANT TO PARTICIPATE? SEND YOUR
              <br />
              PEACEFUL MiX TO  <a style={{ color: '#FECE4D' }} href="mailto:20ftradio@gmail.com">20FTRADIO@GMAIL.COM</a>
            </p>


          </div>
          <div className={styles.timeline}>
            <Timeline />
          </div>
        </div>
        <div className={styles.stripe}>
          <CommentStripe />
        </div>
      </div>
      <PayModal payModal={payModal} setPayModal={setPayModal} />
    </div>
  )
}
