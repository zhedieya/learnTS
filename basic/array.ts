let a: number[] = [1, 2, 3, 4, 5]

let b: any[] = [1, '2', true]

let c: Array<number> = [1, 2, 3, 4, 5]

// 类数组
function sum(a: any, b: any, c: any) {
  let args: IArguments = arguments
  console.log(args)
}

interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}

sum(1, 2, 3)
