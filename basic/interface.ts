interface Person{
  name: string,
  age?: number,
  [propName: string]: string | number | undefined
  // [propName: string]: string | number
  // 类型“number | undefined”的属性“age”不能赋给“string”索引类型“string | number”。ts(2411)
}

let zhedieya: Person = {
  name: 'zhedieya',
  age: 18,
  gender: 'male'
}

console.log(zhedieya);

interface Hello {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Hello = {
  id: 1,
  name: 'Tom',
  gender: 'male'
};

tom.id = 2
