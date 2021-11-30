import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { UserSignIn } from '@m3o/nextjs'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/Login.module.css'

const Login: NextPage = () => {
  const router = useRouter()

  function onSuccessfulLogin(): void {
    /* Add your code here. When successfully logged in the user
    will be available in the <UserProvider /> via the useUser() hook */
    router.push('/')
  }

  return (
    <MainLayout>
      <div className="full-page-container">
        <UserSignIn
          onSuccessfulLogin={onSuccessfulLogin}
          className={styles.login}
        />
      </div>
    </MainLayout>
  )
}

export default Login
