import type { AppProps } from 'next/app'
import { UserProvider } from '@m3o/nextjs/user/client'
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
