export interface Example {
  creator: string
  createdAt: Date
  id: string
  title: string
}

export type ExamplePreCreate = Omit<Example, 'id'>
