type StringToTuple<T extends string> = T extends `${infer First}${infer Rest}` ? [First, ...StringToTuple<Rest>] : []

type LengthOfString<T extends string> =
  StringToTuple<T>['length'];