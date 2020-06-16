// Generic types Array<T>
// const names: Array<string> = [];

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

// Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }


  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('first');
textStorage.addItem('second');
textStorage.removeItem('second');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log('numberStorage', numberStorage.getItems());

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};;
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ['Max', 'Mann'];
// Not allowed to these operation
// names.push('Anna');
// name.pop();
