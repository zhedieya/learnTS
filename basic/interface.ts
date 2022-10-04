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
