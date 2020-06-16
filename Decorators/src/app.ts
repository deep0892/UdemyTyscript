function Logger(logstring: string) {
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING - Person')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object.....');
  }
}

const pers = new Person();

console.log(pers);

// ---

// Adding Decorator to property
// Decorator gets 2 paramters
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method Decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, positsion: number) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(positsion);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

