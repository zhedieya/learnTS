// 命名空间
declare namespace basic {
  function func(url: string): string;
  namespace sub {
    function add(url: string): string;
  }
  // 接口和类型前不用加上declare
  interface Iadd {
    a: number,
    b: number,
    sum: () => number
  }
}
 // 只有一个属性，可以不需要嵌套 `namespace`
declare namespace info.add{
  function add(num: number): number;
}

// 类型
type myType = basic.Iadd & {
  a: number,
}

// declare const clsr : string ❌

// 声明合并
declare function clsr(name: string) : string

declare namespace clsr {
  function add(num: number): number;
}
 
// 枚举enum
declare enum zhedieya{
  a,
  b,
  c,
}
