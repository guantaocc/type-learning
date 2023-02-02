type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
}

type Diff<T extends Record<PropertyKey, any>, U extends Record<PropertyKey, any>> = {
  [P in (keyof T | keyof U) as Exclude<P, keyof T & keyof U>]: (T & U)[P]
}

type ResultDiff = Diff<Foo, Bar>