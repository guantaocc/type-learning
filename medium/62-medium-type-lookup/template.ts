interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

// union extends 的规则，一个一个比较

type LookUp<T, K extends string> = T extends { type: K } ? T : never
type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`