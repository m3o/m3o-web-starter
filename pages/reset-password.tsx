import type { NextPage } from 'next'
import { UserResetPassword } from '@m3o/nextjs'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/ResetPassword.module.css'

const ResetPassword: NextPage = () => {
  return (
    <MainLayout>
      <div className="full-page-container">
        <UserResetPassword
          className={styles.resetPassword}
          onResetPassword={() => console.log(1)}
        />
      </div>
    </MainLayout>
  )
}

export default ResetPassword
