import { useEffect } from 'react'
import { useUser } from '@m3o/nextjs'
import { useRouter } from 'next/router'

export function useAuth() {
  const { user, isAuthenticating } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticating && !user) {
      router.push('/')
    }
  }, [isAuthenticating, user, router])

  return {
    user,
    isAuthenticating
  }
}
