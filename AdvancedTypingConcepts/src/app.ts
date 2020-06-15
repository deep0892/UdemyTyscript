type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection types
type ElevatedEmployee = Admin & Employee;

const e: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

// Type gaurds
function add(a: Combinable, b: Combinable) {
  // Type gaurd
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log(`Name: ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Priveleges: ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`StartDate: ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving.....');
  }
}

class Truck {
  drive() {
    console.log('Driving Truck.....');
  }
  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Union
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 20 });
moveAnimal({ type: 'horse', runningSpeed: 200 });

// Type Casting
const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

userInputElement.value = "Hi There!";

// Index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a email',
  userName: 'Must start with a capital letter'
};

// Function overloading
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: number, b: string): string;
function addition(a: Combinable, b: Combinable) {
  // Type gaurd
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addition('Dips', 'Singh');
const arr = result.split(' ');

const result1 = addition(1, 5);
// result1.split('') not allowed as the returned result is number