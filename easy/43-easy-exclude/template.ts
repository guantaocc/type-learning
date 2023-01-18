type MyExclude<T, U> = T extends U ? never : T


// union extends union 行为

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'