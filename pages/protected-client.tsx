import type { NextPage } from 'next'
import { MainLayout } from '../components/MainLayout'
import { useAuth } from '../hooks/useAuth'

const ProtectedClient: NextPage = () => {
  const { user, isAuthenticating } = useAuth()

  return (
    <MainLayout>
      {isAuthenticating ? (
        <p>Authenticating...</p>
      ) : user ? (
        'Authenticated'
      ) : null}
    </MainLayout>
  )
}

export default ProtectedClient
