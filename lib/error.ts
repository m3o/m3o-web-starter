import type { NextApiResponse } from 'next'

interface HandleError {
  res: NextApiResponse
  code?: number
  message?: string
}

export function handleError({
  res,
  code = 500,
  message = 'Internal Server Error'
}: HandleError) {
  res.status(code).send({ error: { message } })
}
