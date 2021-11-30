import type { AppProps } from 'next/app'
import { UserProvider } from '@m3o/nextjs'
import '@m3o/nextjs/m3o-next.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
