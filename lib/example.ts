import type { CreateResponse, ReadResponse } from 'm3o/db'
import type { ExamplePreCreate } from './types'
import { db } from './m3o'

const TABLE_NAME = 'example'

export function createExampleItem(
  example: ExamplePreCreate
): Promise<CreateResponse> {
  return db.create({
    record: example,
    table: TABLE_NAME
  })
}

export function fetchAllExamples(): Promise<ReadResponse> {
  return db.read({ table: TABLE_NAME })
}
