"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('your code goes here!!', '');
var userName = 'Max';
// userName = 'Max'; can't be changed
// let age = 30;
// age = 40;
var add = function (a, b) { return a + b; };
console.log(add(10, 20));
var printOutput = function (output) {
    return console.log(output);
};
printOutput(add(10, 20));
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
// Spread operator
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Max',
    age: 27,
};
// Rest Parameters
var copiedPerson = __assign({}, person);
var newAdd = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    numbers.reduce(function (previous, current) {
        return current + previous;
    }, 0);
};
var addedNumbers = newAdd(5, 10, 2, 23, 4, 5);
console.log(addedNumbers);
//  Array & Object Destructuring
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobby1, hobby2, remainingHobbies, hobbies);
var firstName = person.firstName, age = person.age;
