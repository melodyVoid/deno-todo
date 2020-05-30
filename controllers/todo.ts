import { Response } from '../deps.ts'

/**
 * @description 获取 todo-list
 * @route GET /todos
 * @date 2020/05/30
 */
export const getTodos = async ({ response }: { response: Response }) => {
  response.body = {
    code: 0,
    message: '获取成功',
    data: [1, 2, 3]
  }
}
