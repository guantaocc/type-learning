const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


// 1. typeof 操作符
// 2. 遍历数组/元组
// 3. as const 数组不变类型
// 4. 遍历 数组索引 P in keyof T
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}