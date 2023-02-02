type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Merge<T extends Record<PropertyKey, any>, U extends Record<PropertyKey, any>> = {
  [P in keyof T | keyof U]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never
}

type ResultMerge = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}