// 利用 spread 操作, unshift同理

type Push<T extends any[], U> = [...T, U]


type Result5 = Push<[1, 2], '3'> // [1, 2, '3']