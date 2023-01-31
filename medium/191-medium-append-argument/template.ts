type Fn = (a: number, b: string) => number

// type AppendArgument<T extends (...args: any[]) => any, O> = T extends (...args: infer A) => infer R ? (...args: [...A, O]) => R : never

// 借助内置的 type 类型

type AppendArgument<
  T extends (...args: any[]) => unknown,
  U
> =
  (...args: [...Parameters<T>, U]) => ReturnType<T>;

type Result191 = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number