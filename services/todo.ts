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

export const _getTodo = async (id: string): Promise<Todo | undefined> => {
  const todoList = await fetchData()
  const targetTodo: Todo | undefined = todoList.find(item => item.id === id)
  return targetTodo
}

export const _updateTodo = async (id: string, todo: Todo): Promise<void> => {
  const targetTodo = await _getTodo(id)

  if (targetTodo === undefined) {
    throw new Error('没有找到该 Todo')
  }

  const newTodo = {
    ...targetTodo,
    ...todo,
  }

  const todos = await _getTodos()
  const targetIndex = todos.findIndex(item => item.id === targetTodo.id)
  todos.splice(targetIndex, 1, newTodo)

  await saveData(todos)
}