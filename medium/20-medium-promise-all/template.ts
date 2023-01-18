const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});


// 1. keyof 遍历数组
// 2. Awaited 解出 promise 的类型

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: Awaited<T[P]>
}>

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)