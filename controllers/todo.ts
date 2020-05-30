import { Request, Response, v4 } from '../deps.ts'
import { Todo, TodoStatus } from './todo.types.ts'
import {
  _getTodos,
  _createTodo,
  _getTodo,
  _updateTodo,
  _deleteTodo,
} from '../services/todo.ts'

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
export const addTodo = async ({
  request,
  response,
}: {
  request: Request
  response: Response
}) => {
  const body = await request.body()
  const todo: Todo = body.value

  if (!request.hasBody) {
    response.status = 400
    response.body = {
      code: 1,
      message: '请求参数不合法',
      data: null,
    }
    return
  }

  if (todo.content === '' || todo.content === undefined) {
    response.status = 400
    response.body = {
      code: 1,
      message: '请填写 Todo 信息',
      data: null,
    }
    return
  }

  await _createTodo({
    ...todo,
    id: v4.generate(),
    status: TodoStatus.TODO,
  })

  response.body = {
    code: 0,
    message: '新增成功',
    data: null,
  }
}

/**
 * @description 获取 Todo 详情
 * @route GET /todos/:id
 * @date 2020/05/30
 */
export const getTodoInfo = async ({
  params,
  response,
}: {
  params: { id: string }
  response: Response
}) => {
  if (params === undefined || params.id === undefined) {
    response.status = 400
    response.body = {
      code: 1,
      message: '参数 id 错误',
    }
    return
  }

  const targetTodo: Todo | undefined = await _getTodo(params.id)

  if (targetTodo === undefined) {
    response.body = {
      code: 1,
      message: '没有查询到该数据',
    }
    return
  }

  response.body = {
    code: 0,
    message: '查询成功',
    data: targetTodo,
  }
}

/**
 * @description 修改 Todo
 * @route PUT /todos/:id
 * @date 2020/05/30
 */
export const updateTodo = async ({
  params,
  request,
  response,
}: {
  params: { id: string }
  request: Request
  response: Response
}) => {
  if (params.id === undefined) {
    response.status = 400
    response.body = {
      code: 1,
      message: 'ID 错误',
    }
    return
  }

  if (!request.hasBody) {
    response.status = 400
    response.body = {
      code: 1,
      message: '参数错误，没有请求体',
    }
    return
  }

  const body = await request.body()
  await _updateTodo(params.id, body.value)

  response.body = {
    code: 0,
    message: '修改成功',
  }
}

/**
 * @description 删除 Todo
 * @route DELETE /todos/:id
 * @date 2020/05/30
 */
export const deleteTodo = async ({
  params,
  response,
}: {
  params: { id: string }
  response: Response
}) => {
  if (params.id === undefined) {
    response.status = 400
    response.body = {
      code: 1,
      message: 'ID参数错误'
    }
    return
  }

  await _deleteTodo(params.id)

  response.body = {
    code: 0,
    message: '删除成功'
  }
}
