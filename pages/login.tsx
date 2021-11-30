import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { UserSignIn } from '@m3o/nextjs'
import styles from '../styles/Login.module.css'

export default function Login(): ReactElement {
  const router = useRouter()

  function onSuccessfulLogin(): void {
    /* Add your code here. When successfully logged in the user
    will be available in the <UserProvider /> via the useUser() hook */
    router.push('/')
  }

  return (
    <div className="full-page-container">
      <UserSignIn
        onSuccessfulLogin={onSuccessfulLogin}
        className={styles.login}
      />
    </div>
  )
}
