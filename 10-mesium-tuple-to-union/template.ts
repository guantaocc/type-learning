// 限制类型参数

type TupleToUnion<T extends unknown[]> = T[number]

// 利用元组声明提取: type a = (string|number)[]
// type TupleToUnion<T extends unknown[]> = T extends (infer B)[] ? B : never

