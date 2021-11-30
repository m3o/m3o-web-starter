import type { FC } from 'react'
import Link from 'next/link'
import { useUser, useLogout } from '@m3o/nextjs'

export const User: FC = () => {
  const { user, isAuthenticating } = useUser()
  const { logout } = useLogout()

  if (isAuthenticating) {
    return <p>loading...</p>
  }

  return user ? (
    <button className="m3o-button" onClick={logout}>
      Logout
    </button>
  ) : (
    <Link href="/login">
      <a className="m3o-button">Login</a>
    </Link>
  )
}