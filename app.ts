import { Application } from './deps.ts'
import router from './routes/index.ts'

// 初始化
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

// API 端口号
const port = 3000

console.log(`Server is listening on http://localhost:${port}`)

await app.listen({ port })
