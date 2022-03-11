import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>
        </div>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
