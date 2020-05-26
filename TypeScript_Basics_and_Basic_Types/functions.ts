console.log("Time to get started...");

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Function with no return statement have a type void
// Specified below but it is not required to specify it
function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

console.log(printResult(add(5, 12)));

// let someValue: undefined;

let combineValues: Function;
combineValues = add;
console.log(combineValues(8, 8));
// combineValues = 5; // Gives error as combineValues is of type function
combineValues = printResult; // Does not give an error as both are of type function
console.log(combineValues(add(8, 8)));

// newFunction is a function that accepts two parameters of type
// numbers and has a return of type number
let newFunction: (a: number, b: number) => number;
newFunction = add;
console.log(newFunction(8, 8));
// newFunction = printResult; Gives error becoz printResult doesn't satisfy the function type

function addAndhandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndhandle(10, 20, (result) => {
  console.log(result);
});
