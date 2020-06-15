interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
let user1: Person;
user1 = {
  name: 'Max',
  age: 27,

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there, I am');

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phase: string): void;
}

class NewPerson implements Greetable {
  name: string;
  age = 20;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user2 = new NewPerson('Max');
user2.greet('Hi there, I am');

// interface as function types

interface AddFn {
  (a: number, b: number): number;
}

let addition: AddFn;

addition = (n1: number, n2: number) => {
  return n1 + n2;
};