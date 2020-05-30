import { Todo } from '../controllers/todo.types.ts'
import { resolve } from '../deps.ts'

export const fetchData = async (): Promise<Todo[]> => {
  // readFile 返回一个 Uint8Array 对象，该对象在解析为 JSON 对象之前需要转换为字符串
  const data = await Deno.readFile(resolve('./db/todoList.json'))

  const decoder = new TextDecoder()
  const decodedData = decoder.decode(data)

  return JSON.parse(decodedData)
}

export const saveData = async (data: Todo[]): Promise<void> => {
  const encoder = new TextEncoder()

  const encodedData = encoder.encode(JSON.stringify(data))

  await Deno.writeFile(resolve('./db/todoList.json'), encodedData)
}