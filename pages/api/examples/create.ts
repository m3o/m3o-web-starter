import type { NextApiResponse, NextApiRequest } from 'next'
import type { ExamplePreCreate } from 'lib/types'
import { getLoggedInUserAccount } from '@m3o/nextjs/user/server'
import { createExampleItem } from 'lib/example'
import { handleError } from 'lib/error'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return handleError({ res, message: 'Method not allowed', code: 405 })
  }

  const body = req.body as ExamplePreCreate

  try {
    const user = await getLoggedInUserAccount(req)
    await createExampleItem({
      ...body,
      creator: user.id!,
      createdAt: new Date()
    })
    res.json({})
  } catch (e) {
    handleError({ res, message: 'Not authorized', code: 401 })
  }
}
