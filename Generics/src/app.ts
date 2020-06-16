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
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Dips' }, { age: 27 });
const mergedObj2 = merge({ name: 'Dips', hobbies: ['sports'] }, { age: 27 });

console.log(mergedObj.age);
console.log(mergedObj2.hobbies);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got np value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
};
console.log(countAndDescribe('Hi There!'));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['Dips', 'Ships']));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value:' + obj[key];
}

// Givens error as the object doesnt have name property
// console.log(extractAndConvert({}, 'name'));
console.log(extractAndConvert({ name: 'Dips' }, 'name'));