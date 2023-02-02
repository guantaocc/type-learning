type Test531 = '123';

type StringToUnion<T> = T extends `${infer First}${infer R}` ? First | StringToUnion<R> : never

type ResultUnion = StringToUnion<Test531>; // expected to be "1" | "2" | "3"