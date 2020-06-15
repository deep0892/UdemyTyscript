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

interface Greetable {
  name: string,
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