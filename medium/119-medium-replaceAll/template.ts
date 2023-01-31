type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Prefix}${From}${infer Suffix}` ? From extends '' ? S : `${Prefix}${To}${ReplaceAll<Suffix, From, To>}` : S


type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'