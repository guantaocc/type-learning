// function 是 Object 的子集
// Record 值不可设为 any，应为实际存在的 Object

type DeepReadonly<T> = T extends any ? {
  readonly [P in keyof T] : T[P] extends Record<string, unknown> | unknown[]  ? DeepReadonly<T[P]> : T[P]
}: never

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type a4 = DeepReadonly<X1>