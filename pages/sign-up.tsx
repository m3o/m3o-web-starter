import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  UserSignUp,
  UserFirstNameField,
  UserLastNameField,
  UserEmailField,
  UserPasswordField
} from '@m3o/nextjs'
import styles from '../styles/SignUp.module.css'
import { MainLayout } from '../components/MainLayout'

const SignUp: NextPage = () => {
  const router = useRouter()

  function onSignUp() {
    router.push('/login')
  }

  return (
    <MainLayout>
      <div className="full-page-container">
        <UserSignUp onSignUp={onSignUp} className={styles.signUp}>
          <UserFirstNameField />
          <UserLastNameField />
          <UserEmailField />
          <UserPasswordField />
        </UserSignUp>
      </div>
    </MainLayout>
  )
}

export default SignUp
