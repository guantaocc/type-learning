// 1. 函数 extends 限制string类型 才能去除类型的key值
// 2. 函数参数需要 限制 keyof T，不能有重复键值
// 3. 返回值如果有重复值 正常返回，进行 交叉时进行丢弃

type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<{ [P in keyof T as P extends K ? never: P]: T[P]} & {[P in K]: V}>,
  get: () => T
}

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result12 {
  foo: number
  name: string
  bar: {
    value: string
  }
}