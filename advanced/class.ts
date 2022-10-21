// 使用 class 定义类，使用 constructor 定义构造函数。
class Animal {
  public name
  constructor(name: string) {
    this.name = name
  }
  sayHi() {
    console.log(`My name is ${this.name}`)
  }
}

let dog: Animal = new Animal('Dog')
dog.sayHi() // My name is Dog

// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
class Cat extends Animal {
  public _sex!: string
  constructor(name: string) {
    super(name)
  }
  // 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
  static eat(): void {
    console.log('need to eat')
  }
  sayHi(): void {
    super.sayHi()
  }
  get sex(): string {
    return this._sex
  }
  set sex(value: string) {
    this._sex = value
  }
}
let cat: Cat = new Cat('Cat')
cat.sayHi() // Meeoww My name is Cat
// 如果get写死的话，set就不会生效
cat.sex = 'female'
console.log(cat.sex) // female
Cat.eat() // need to eat

// 抽象类
abstract class Abanimal {
  public name
  public constructor(name: string) {
    this.name = name
  }
  // 抽象方法
  public abstract sayHi(): void
}

class AbCat extends Abanimal {
  public sayHi(): void {
    console.log(`Meow, My name is ${this.name}`)
  }
}

let abCat : AbCat = new AbCat('Tom')
abCat.sayHi() // Meow, My name is Tom
