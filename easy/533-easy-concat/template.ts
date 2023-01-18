// spread 操作符

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

type Result533 = Concat<[1], [2]> // expected to be [1, 2]