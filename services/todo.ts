import { fetchData } from './db.ts'
import { Todo } from '../controllers/todo.types.ts'

export const _getTodos = async (): Promise<Todo[]> => {
  const todoList = await fetchData()
  return todoList
}
