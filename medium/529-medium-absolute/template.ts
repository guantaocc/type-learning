type Test529 = -100;

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}` 

type Result529 = Absolute<Test529>; // expected to be "100"