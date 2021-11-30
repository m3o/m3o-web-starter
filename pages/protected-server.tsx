import type { NextPage } from 'next'
import { withAuth } from '@m3o/nextjs'

/**
 * This is an example of the route being blocked by the server.
 * This is generally slower and means that you lose Static Generation.
 * The user prop will be picked up within the `_app.tsx` file and passed automatically
 * to the <UserProvider />. This saves passing the provider on each page.
 */
export const getServerSideProps = withAuth(async context => {
  if (!context.req.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: context.req.user
    }
  }
})

const ProtectedServer: NextPage = () => {
  return <div>This page will be visible if logged in</div>
}

export default ProtectedServer
