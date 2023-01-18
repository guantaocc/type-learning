type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]


// 1. T[0]
// 2. extends
// 3. union
// 4. infer变量

// type First<T extends readonly any[]> = T extends [] ? never : T[0]
// type First<T extends readonly any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends readonly any[]> = T[0] extends T[number] ? never : T[0]
type First<T extends readonly any[]> = T extends [infer First, ...infer Rest] ? First : never



type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
