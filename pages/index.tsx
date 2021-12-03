import type { NextPage } from 'next'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>M3O | Web Starter</title>
        <meta
          name="description"
          content="Example application using M3O components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Welcome to the M3O Starter Kit</h1>
        <h2 className={styles.subTitle}>
          M3O provides the next generation of building blocks for applications.{' '}
        </h2>
      </div>
    </MainLayout>
  )
}

export default Home
