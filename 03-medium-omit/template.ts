// 索引变为 never 可以去除

type MyOmit<T extends object, U extends keyof T> = {
  [P in keyof T as P extends U ? never : P]: T[P]
}

type a = MyOmit<Todo, 'description'>