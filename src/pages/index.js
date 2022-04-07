
import { Timeline } from '../features/home/components/Timeline';
import { Stream } from '../features/home/components/Stream';
import Head from 'next/head';
import { CommentStripe } from '../features/home/components/CommentStripe';
import { PayModal } from '../features/home/components/PayModal';
import { Info } from '../features/home/components/Info';
import styles from '../styles/Home.module.scss'
import { SEO } from '../utils/seo';
import { useState } from 'react';

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
        {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script src='https://c18.radioboss.fm/w/nowplaying.js?u=146&amp;wid=15216&amp;nl=1'></script>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
            <Info seo={seo} />
          </div>
          {/*<div className={styles.timeline}>*/}
          {/*<Timeline />*/}
          <Stream />
          {/*</div>*/}
        </div>
        <div className={styles.stripe}>
          <CommentStripe />
        </div>
      </div>
      <PayModal payModal={payModal} setPayModal={setPayModal} />
    </div>
  )
}
