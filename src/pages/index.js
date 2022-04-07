// eslint-disable-next-line no-restricted-imports
import Head from 'next/head';
import { useState } from 'react';

import { CommentStripe } from '../features/home/components/CommentStripe';
import { Info } from '../features/home/components/Info';
import { Stream } from '../features/home/components/Stream';
import { Timeline } from '../features/home/components/Timeline';
import {
  CURENT_ARTIST_ID,
  NEXT_ARTIST_ID,
  TABS,
} from '../features/home/components/constans';
import styles from '../styles/Home.module.scss';
import { SEO } from '../utils/seo';

export default function Home() {
  const [tab, setTab] = useState(TABS.player);
  const seo = {
    title: 'Grains of Peace on 20ft Radio',
    content:
      'We believe that music is an instrument of peace, a medicine, which power can be felt by everyone and can help to find faith, hope and peace in this world again.',
    image: '../assets/images/social2.jpeg',
    url: 'https://www.20ftradio.net/grains-of-peace',
  };

  const tabList = {
    [TABS.schedule]: <Timeline setTab={setTab} />,
    [TABS.player]: <Stream setTab={setTab} />,
  };

  return (
    <div>
      <Head>
        <title>Grains of peace</title>
        <SEO seo={seo} />
        {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
        <script src="https://c18.radioboss.fm/w/nowplaying.js?u=146&amp;wid=15216&amp;nl=1"></script>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
            <Info seo={seo} />
          </div>
          {tabList[tab]}
        </div>
        <div className={styles.stripe}>
          <CommentStripe />
        </div>
      </div>
      <div style={{ color: 'transparent', fontSize: '0px' }}>
        <div id={CURENT_ARTIST_ID}></div>
        <div>
          <span id={NEXT_ARTIST_ID}>...</span>
        </div>
      </div>
    </div>
  );
}
