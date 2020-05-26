console.log("Time to get started...");

// Type Alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
type User1 = {
  name: string;
  age: number;
};
const u1: User = { name: "Dips", age: 30 };

// For example, you can simplify this code
// From
// function greet(user: { name: string; age: number }) {
//   console.log(`Hi, I am ${user.name}`);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To
type User = { name: string; age: number };
function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log("combinedAges", combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log("combinedAges", combinedAges);

const combinedName = combine("Dips", "Singh", "as-text");
console.log("combonedNames", combinedName);
