import type { FC } from 'react'
import Link from 'next/link'
import { useUser, useLogout } from '@m3o/nextjs/user/client'

export const User: FC = () => {
  const { user, isAuthenticating } = useUser()
  const { logout } = useLogout()

  if (isAuthenticating) {
    return <p>loading...</p>
  }

  if (user) {
    return (
      <button className="btn" onClick={logout}>
        Logout
      </button>
    )
  }

  return (
    <Link href="/login">
      <a className="btn">Login</a>
    </Link>
  )
}
