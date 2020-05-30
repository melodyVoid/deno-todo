import { Router } from '../deps.ts'
import {
  getTodos,
  getTodoInfo,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.ts'

const router = new Router()

router
  .get('/todos', getTodos)
  .get('/todos/:id', getTodoInfo)
  .post('/todos', addTodo)
  .put('/todos/:id', updateTodo)
  .delete('/todos/:id', deleteTodo)

export default router
