// 类型断言
// 语法 值 as 类型  或者 <类型>值
interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}

let aaa :Fish = {
  name: 'aaa',
  swim() {
    console.log('aaa swim')
  }
}
console.log(typeof(aaa));

function isFish(animal: Cat | Fish) {
  // typeof animal.swim === 'function'  // 会报错
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 父类断言为子类
class ApiError extends Error {
  code: number = 0
}
class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}

// 类型断言的限制
interface Animal {
  name: string
}

interface Dog {
  name: string
  run(): void
}

// 上述代码会被理解为继承.因为TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。
interface Dog1 extends Animal {
  run(): void
}

let bobby: Dog = {
  name: 'bobby',
  run() {
    console.log('')
  },
}
let ponny: Animal = bobby
// 当 `Animal` 兼容 `Dog` 时，它们就可以互相进行类型断言了
function testAnimal(animal: Animal) {
  return (animal as Dog).run()
}
function testDog(dog: Dog) {
  return (dog as Animal).name
}

// 将any断言为一个具体的类型
let obj = {
  a: 1,
}
function getCacheData(key: string): any {
  return (obj as any).a
}

interface Cat {
  name: string
  run(): void
}

const tom = getCacheData('tom') as Cat
// 在这个例子里  也可以用'类型声明'方式达成目的

// 在这儿可以这么用的原因是any与Cat互相兼容，而若any换成Cat不兼容的类型，就会报错
const tom1: Cat = getCacheData('tom')

export {}
