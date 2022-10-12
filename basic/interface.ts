interface Person{
  name: string,
  age?: number,
  [propName: string]: string | number
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
