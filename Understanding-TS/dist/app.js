"use strict";
var user1;
user1 = {
    name: 'Max',
    age: 27,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there, I am');
var NewPerson = /** @class */ (function () {
    // Optional parameter in function
    function NewPerson(n) {
        this.age = 20;
        if (n) {
            this.name = n;
        }
    }
    NewPerson.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    };
    return NewPerson;
}());
var user2 = new NewPerson('Max');
user2.greet('Hi there, I am');
var addition;
addition = function (n1, n2) {
    return n1 + n2;
};
