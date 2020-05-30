import { Router } from '../deps.ts'
import { getTodos } from '../controllers/todo.ts'

const router = new Router()

router.get('/todos', getTodos)

export default router
