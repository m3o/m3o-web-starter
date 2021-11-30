import type { NextPage } from 'next'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

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
    </MainLayout>
  )
}

export default Home
