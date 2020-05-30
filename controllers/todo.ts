import { Response } from '../deps.ts'
import { _getTodos } from '../services/todo.ts'

/**
 * @description 获取 todo-list
 * @route GET /todos
 * @date 2020/05/30
 */
export const getTodos = async ({ response }: { response: Response }) => {
  const todoList = await _getTodos()
  response.body = {
    code: 0,
    message: '获取成功',
    data: todoList,
  }
}
