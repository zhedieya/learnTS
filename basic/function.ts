// 函数声明
// 最后的number限制的是函数返回值的类型
function sum(x: number, y: number): number {
  return x + 2 * y
}

// 函数表达式
let mySum = function (x: number, y: number): number {
  return x + y
}
// 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的
// 如果需要我们手动给 mySum 添加类型，应该是这样：
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 使用接口定义函数表达式的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
// 这样也不用再次定义等号右边匿名函数的返回类型了
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数，可选参数必须在最后，后面不允许出现必需参数
function buildName1(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let tomcat1 = buildName1('Tom', 'Cat')
let tom1 = buildName1('Tom')

// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
// 此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName
}
let tomcat2 = buildName2('Tom', 'Cat')
let tom2 = buildName2('Tom')

// 剩余参数
// rest实际上是一个数组，我们可以用数组的类型来定义它
function restFunc(a: number, ...rest: number[]) {
  return a + rest.reduce((pre, cur) => pre + cur)
}

// 重载
// 前几次都是函数定义，最后一次是函数实现
function reverse(x: string): string
function reverse(x: number): number
function reverse(x: string | number): string | number | void {
  if (typeof x === 'string') {
    return x.split('').reverse().join('')
  } else if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }
}
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
