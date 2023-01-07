interface Todo {
  title: string
  description: string
  completed: boolean
}

// 1. in 遍历联合索引并
// 2. keyof 限制 k 为 T类型的索引
// 3. T[P] indexed
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}