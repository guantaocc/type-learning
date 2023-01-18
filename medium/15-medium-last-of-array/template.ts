type arr14 = ['a', 'b', 'c']
type arr24 = [3, 2, 1]

type Last<T extends unknown[]> = T extends [...infer P, infer R] ? R : never

type tail14 = Last<arr1> // expected to be 'c'
type tail24 = Last<arr2> // expected to be 1