type ExampleType = Promise<string>


// 处理嵌套promise 和 联合类型
type MyAwaited<T extends Promise<unknown> | { then: (onfulfilled: (arg: any) => any) => any }> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : T extends { then: (onfulfilled: (arg: infer Q) => any) => any } ? Q : never

type Result1 = MyAwaited<ExampleType> // string
