export interface Todo {
  id: string
  content: string
  status: TodoStatus
}

export enum TodoStatus {
  TODO,
  DONE,
}