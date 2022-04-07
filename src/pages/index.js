import Head from 'next/head';
import { useState } from 'react';
import { CommentStripe } from '@radio//features/home/components/CommentStripe';
import { Info } from '@radio//features/home/components/Info';
import { Stream } from '@radio//features/home/components/Stream';
import { RadioBossWidget } from '@radio//features/home/components/RadioBossWidget'
import { Timeline } from '@radio//features/home/components/Timeline';
import { TABS, seo } from '@radio//features/home/components/constans';
import styles from '@radio/styles/Home.module.scss';
import { SEO } from '@radio/utils/seo';

export default function Home() {
  const [tab, setTab] = useState(TABS.player);

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
      <RadioBossWidget />
    </div>
  );
}
