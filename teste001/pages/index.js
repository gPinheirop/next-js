import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.container}>
      <h1>Página inicial</h1>
    </div>
    </>
  )
}
