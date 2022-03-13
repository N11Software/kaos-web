import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaos</title>
        <meta name="description" content="Kaos, your place to create, discuss, and play your game." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headerLogo}>KAOS</h1>
          <div className={styles.headerLinks}>
            <a className={styles.headerLink} href="store/">STORE</a>
            <a className={styles.headerLink} href="community/">COMMUNITY</a>
            <a className={styles.headerLink} href="about/">ABOUT</a>
          </div>
          <div className={styles.headerLogin}>
            <a className={styles.headerLoginLink} href="login/">LOGIN</a>
          </div>
        </header>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://n11software.com">
          <Image src="/images/N11-Logo-Alternate-Transparent.png" width={75} height={50} />
        </a>
        <p className={styles.footerCopyright}>Copyright © N11 Software. All rights reserved. All trademarks are property of their respective owners in the US and other countries.</p>
      </footer>
    </div >
  )
}

export default Home
