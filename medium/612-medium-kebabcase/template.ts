// 所有大写字母

// 从后面字母判断
type KebabCase<T> =
  T extends `${infer Head}${infer Tail}`
  ? Tail extends Uncapitalize<Tail>
    ? `${Uncapitalize<Head>}${KebabCase<Tail>}`
    : `${Uncapitalize<Head>}-${KebabCase<Tail>}`
  : T; 

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";