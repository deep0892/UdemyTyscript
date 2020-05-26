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
