import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import {
  UserSignUp,
  UserFirstNameField,
  UserLastNameField,
  UserEmailField,
  UserPasswordField
} from '@m3o/nextjs'
import styles from '../styles/SignUp.module.css'

export default function SignUp(): ReactElement {
  const router = useRouter()

  function onSignUp() {
    router.push('/login')
  }

  return (
    <div className="full-page-container">
      <UserSignUp onSignUp={onSignUp} className={styles.signUp}>
        <UserFirstNameField />
        <UserLastNameField />
        <UserEmailField />
        <UserPasswordField />
      </UserSignUp>
    </div>
  )
}
