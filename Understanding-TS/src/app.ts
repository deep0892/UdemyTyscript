console.log('your code goes here!!', '');

const userName = 'Max';
// userName = 'Max'; can't be changed

let age = 30;

age = 40;

const add = (a: number, b: number) => a + b;
console.log(add(10, 20));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(10, 20));

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 27,
};

const copiedPerson = { ...person };

const newAdd = (...numbers: number[]) => {
  let result = 0;
  numbers.reduce((previous, current) => {
    return current + previous;
  }, 0);
};

const addedNumbers = newAdd(5, 10, 2, 23, 4, 5);
console.log(addedNumbers);
