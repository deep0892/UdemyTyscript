// const person: {
//   name: string;
//   age: number;
// };
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Deepankar",
//   age: 27,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  Read_ONLY,
  AUTHOR,
}

const person = {
  name: "Deepankar",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// person.role[1] = 1;  Error
// person.role.push("admin"); Does no give error and is allowed by typescript

console.log("person", person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
if (person.role == Role.ADMIN) {
  console.log("is ADMIn", "");
}
