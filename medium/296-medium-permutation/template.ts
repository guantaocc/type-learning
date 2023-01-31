type Permutation<T, Acc = T> = [T] extends [never] ? [] : Acc extends T ? [Acc, ...Permutation<Exclude<T, Acc>>] : []


type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type exclude1 = Exclude<'A' | 'B' | 'C', 'A'>

// 排列算法 -> 删除法
// https://www.topcoder.com/blog/generating-permutations/

function without(arr: any[], del: any): any[] {
  let clone = JSON.parse(JSON.stringify(arr))
  let index = clone.indexOf(del)
  if(index !== -1){
    clone.splice(index, 1)
  }
  return clone
}

const PermutationByRemove= (elements: any[]): any[] =>
  elements.length === 1
    ? [elements]
    : elements
        .map((element) =>
        PermutationByRemove(without(elements, element)).map((arrangement) => [
            element,
            ...arrangement,
          ])
        )
        .flat();

console.log(PermutationByRemove([1, 1, 2, 3]))

// distributive 效果 见 distributive.png