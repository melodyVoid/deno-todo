import { fetchData, saveData } from './db.ts'
import { Todo } from '../controllers/todo.types.ts'

export const _getTodos = async (): Promise<Todo[]> => {
  const todoList = await fetchData()
  return todoList
}

export const _createTodo = async (todo: Todo): Promise<void> => {
  const todoList = await fetchData()
  await saveData([
    ...todoList,
    todo,
  ])
}