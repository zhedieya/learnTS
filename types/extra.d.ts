export declare const name1: string

export declare namespace test1{
  function add(num: number): number;
}

// 只有 `function`、`class` 和 `interface` 可以直接默认导出，其他的变量需要先定义出来，再默认导出
// export default function heihei(age: number): number

declare enum info {
  a,
}
// 一个模块不能有多个默认导出
export default info

