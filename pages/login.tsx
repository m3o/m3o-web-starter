import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEmailLogin } from '@m3o/nextjs/user/client'
import { EMAIL_REGEX } from '@/lib/constants'
import { MainLayout } from '../components/MainLayout'

interface LoginFormFields {
  email: string
  password: string
}

/**
 * This example login page uses `react-hook-form` for validation
 * see here: https://react-hook-form.com/api for more details. You can use
 * whatever you like here, the only part you need for the login is the `useEmailLogin`
 * hook.
 */
const Login: NextPage = () => {
  const router = useRouter()
  const { handleSubmit, register, formState } = useForm<LoginFormFields>()

  const { login, error } = useEmailLogin({
    onSuccess: () => {
      /* Add your code here. When successfully logged in the user
      will be available in the <UserProvider /> via the useUser() hook */
      router.push('/')
    }
  })

  return (
    <MainLayout>
      <div className="full-page-container">
        <div className="card">
          <h1 className="card-title">Login</h1>
          {error && <p className="error-alert">{error}</p>}
          <form onSubmit={handleSubmit(login)}>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                {...register('email', {
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Please provide a valid email address'
                  },
                  required: {
                    value: true,
                    message: 'Please provide an email address'
                  }
                })}
              />
              {formState.errors.email?.message && (
                <p className="error">{formState.errors.email?.message}</p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Please provide your password'
                  }
                })}
              />
              {formState.errors.password?.message && (
                <p className="error">{formState.errors.password?.message}</p>
              )}
            </div>
            <button className="btn" data-testid="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login
