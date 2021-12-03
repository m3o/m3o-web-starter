import type { NextApiResponse, NextApiRequest } from 'next'
import type { Example } from 'lib/types'
import { fetchAllExamples } from 'lib/example'
import { handleError } from 'lib/error'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return handleError({ res, message: 'Method not allowed', code: 405 })
  }

  try {
    const { records = [] } = await fetchAllExamples()
    res.json(records as Example[])
  } catch (e) {
    handleError({ res })
  }
}
