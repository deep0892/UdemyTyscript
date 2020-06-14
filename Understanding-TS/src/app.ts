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
