let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sentence);

// 空值
function alertName(): void {
  alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能为它赋予 undefined 和 null：
let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;
// 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
// 这样不会报错
let num: number = undefined;
// 而 void 类型的变量不能赋值给 number 类型的变量：

export {}
