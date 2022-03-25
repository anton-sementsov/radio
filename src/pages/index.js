
import { Timeline } from '../features/home/components/Timeline'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Button } from '../components/Button'
import logo from '../assets/images/logo.png'
import { ProgressBar } from '../features/home/components/ProgressBar'
import { CommentStripe } from '../features/home/components/CommentStripe'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Grains of peace</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src={logo.src} />
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
            {'Listen to music and stand with Ukraine.🇺🇦'.toUpperCase()} <br />
          </p>
          <p style={{ paddingTop: '20px', maxWidth: '620px', fontWeight: '600', color:'#ffffff' }}>
            {'Our goal is $100 000 for humanitarian needs: this funds will be transfered to NBU Fundraising Account for Humanitarian Assistance, Destroyed Property and Infrastructure Restoration Fund and friends-volunteers who are fighting back the occupier in different Ukrainian cities.'.toUpperCase()} <br />
          </p>
          <div style={{ marginTop: '35px' }}>
            <ProgressBar />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button label='DONATE' onClick={() => { window.open('https://www.20ftradio.net/grains-of-peace', '_blank').focus(); }} />
          </div>
          <p style={{ marginTop: '15px' }}>
            WANT TO PARTICIPATE? SEND YOUR
            <br />
            PAECEFULL MiX TO  <a style={{ color: '#ffda23' }} href="mailto:20FTRADIO@GMAIL.COM">20FTRADIO@GMAIL.COM</a>
          </p>
        </div>
        <div className={styles.timeline}>
          <Timeline />
        </div>
        <div className={styles.stripe}>
          <CommentStripe />
        </div>
      </div>
    </div>
  )
}
