// false 类型
type Falsy = 0 | "" | false | [] | Record<string, never> | null | undefined;

type AnyOf<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Head extends Falsy
    ? AnyOf<Tail>
    : true
  : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
