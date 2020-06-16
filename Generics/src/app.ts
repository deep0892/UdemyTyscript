// Generic types Array<T>
const names: Array<string> = [];

// Promise<T>
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

// Creating a generic types
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Dips' }, { age: 27 });
const mergedObj2 = merge({ name: 'Dips', hobbies: ['sports'] }, { age: 27 });

console.log(mergedObj.age);
console.log(mergedObj2.hobbies);

