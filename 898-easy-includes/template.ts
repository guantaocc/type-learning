// 1. 使用递归操作，取出数组第一个元素判断 key, 剩余元素继续递归
import type { Equal } from '@type-challenges/utils'

export type Includes<T, U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'fs'>