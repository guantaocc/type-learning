
// 如果是正常类型 T 类型不会有 distrubtive 特性
// see: https://github.com/type-challenges/type-challenges/issues/1140
type IsUnion<T, Copy = T> =
  (
    T extends T
    ? Copy extends T
      ? true
      : unknown
    : never
  ) extends true
  ? false
  : true
;

type s2 = IsUnion<1 | 2>