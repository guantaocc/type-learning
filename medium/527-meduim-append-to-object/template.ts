type Test = { id: '1', age: 12, sun: Boolean }

type AppendToObject<T extends Record<string, any>, K extends PropertyKey, V extends any> = {
  [key in keyof T | K] : key extends keyof T ? T[key] : V
}

type Result527 = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

// 交叉类型取key值
// type sss = ({ id: 3} & { age: 12})['id']
