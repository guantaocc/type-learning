type TrimLeft<T extends string> = T extends `${' '|'\n'|'\t'}${infer R}` ? TrimLeft<R>: T

type trimed = TrimLeft<'  Hello World  '>