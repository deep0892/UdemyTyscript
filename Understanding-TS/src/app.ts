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
  readonly name?: string;
  // Optional properties in interface
  outputName?: string;
}

interface Greetable extends Named {
  greet(phase: string): void;
}

class NewPerson implements Greetable {
  // Optional properties in classes
  name?: string;
  age = 20;
  // Optional parameter in function
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi');
    }
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