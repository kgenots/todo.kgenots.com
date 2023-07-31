export interface ITodo {
  id: string
  title: string
  description: string
  tags: string[]
  created_date: string
}

export interface ITodoInput {
  title: string
  description: string
  tags: string[]
}
