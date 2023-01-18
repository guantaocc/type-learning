// 1. 默认值
// 2. 索引类型的交叉

type MyReadonly2<T extends Record<string, any>, K extends keyof T = keyof T> = {
  readonly [P in K] : T[P]
} & Omit<T, K>