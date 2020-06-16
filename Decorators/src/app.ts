function Logger(logstring: string) {
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  };
}

@Logger('LOGGING - Person')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object.....');
  }
}

const pers = new Person();

console.log(pers);