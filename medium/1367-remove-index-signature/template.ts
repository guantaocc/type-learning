type Foo1367 = {
  [key: string]: any;
  foo(): void;
  name: number
}

// 排除 PropertyKey 后的类型
// type TypeLiteralOnly<T> =
// string extends T
// ? never
// : number extends T
//   ? never
//   : symbol extends T
//     ? never
//     : T;


// type RemoveIndexSignature<T> = {
//   [P in keyof T as TypeLiteralOnly<P>]: T[P]
// }

type RemoveIndexSignature<T> = {
  [
    K in keyof T as
      K extends `${infer R}` // excludes symbol and number
      ? R
      : never
  ]: T[K]
};

type A1367 = RemoveIndexSignature<Foo1367>  // expected { foo(): void }