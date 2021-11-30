import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { UserSignIn } from '@m3o/nextjs'
import styles from '../styles/Login.module.css'

export default function Login(): ReactElement {
  const router = useRouter()

  function onSuccessfulLogin() {
    // Add your code here. When successfully logged in the user will now be available in the provider
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
