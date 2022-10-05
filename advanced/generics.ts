// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
console.log(createArray<string>(3, '1'))

// 定义泛型的时候，可以一次定义多个类型参数：

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

swap([7, 'seven']) // ['seven', 7]

// 泛型约束
interface hasLength {
  length: number
}

function getLength<T extends hasLength>(arg: T): number {
  console.log(arg.length)
  return arg.length
}

getLength([1, 2])

// 多个类型参数之间也可以互相约束：

// T继承U，这样U中若有T中没有的属性，就会报错
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }

copyFields(x, { b: 10, d: 20 })

// 泛型接口
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>
}
let createArray1: CreateArrayFunc<any>
createArray1 = function <T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

// 泛型参数的默认类型
function createArray2<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
