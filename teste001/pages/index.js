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
        <h1 className={styles.title}>Página inicial</h1>
      </div>
      <Image 
        src="/images/city.jpg"
        width="300px"
        height="400px"
        alt='cidade na noite'
      />
    </>
  )
}
