type arr16 = ['a', 'b', 'c', 'd']
type arr26 = [3, 2, 1]

type Pop<T> = T extends [...infer U, infer R] ? U : never

type re16 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re26 = Pop<arr2> // expected to be [3, 2]

// 