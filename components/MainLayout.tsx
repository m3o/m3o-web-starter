import type { FC } from 'react'
import { Header } from './Header'
import styles from '../styles/MainLayout.module.css'

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  )
}
