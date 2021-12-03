import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { UserResetPassword } from '@m3o/nextjs/user/client'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/ResetPassword.module.css'

const ResetPassword: NextPage = () => {
  const router = useRouter()

  function onResetPassword(): void {
    router.push('/login')
  }

  return (
    <MainLayout>
      <div className="full-page-container">
        <UserResetPassword
          className={styles.resetPassword}
          onResetPassword={onResetPassword}
        />
      </div>
    </MainLayout>
  )
}

export default ResetPassword
