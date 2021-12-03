import { DbService } from 'm3o/db'

export const db = new DbService(process.env.M3O_KEY as string)
