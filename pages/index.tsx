import type { NextPage, GetServerSideProps } from 'next'
import type { Example } from 'lib/types'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

interface Props {
  examples: Example[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:3000/api/examples')
  const examples = (await response.json()) as Example[]

  return {
    props: { examples }
  }
}

const Home: NextPage<Props> = ({ examples }) => {
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
        <div>
          {examples.map(example => (
            <div key={example.id}>
              <h3>{example.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
