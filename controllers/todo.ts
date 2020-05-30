import { Request, Response } from '../deps.ts'
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


/**
 * @description 新增 Todo
 * @route POST /todos
 * @date 2020/05/30
 */
export const addTodo = async ({ request, response}: { request: Request, response: Response}) => {
  response.body = 'post'
}

/**
 * @description 获取 Todo 详情
 * @route GET /todos/:id
 * @date 2020/05/30
 */
export const getTodoInfo = async ({ request, response}: { request: Request, response: Response}) => {
  response.body = 'getInfo'
}

/**
 * @description 修改 Todo
 * @route PUT /todos/:id
 * @date 2020/05/30
 */
export const updateTodo = async ({ request, response}: { request: Request, response: Response}) => {
  response.body = 'put'
}

/**
 * @description 删除 Todo
 * @route DELETE /todos/:id
 * @date 2020/05/30
 */
export const deleteTodo = async ({ request, response}: { request: Request, response: Response}) => {
  response.body = 'delete'
}