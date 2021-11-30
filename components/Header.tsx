import type { FC } from 'react'
import Link from 'next/link'
import { User } from './User'
import styles from '../styles/Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.homeLink}>M3O Web Starter</a>
        </Link>
        <User />
      </div>
    </header>
  )
}
