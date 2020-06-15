"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // public name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    describe() {
        console.log(`Department: (${this.id}) ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('A&B', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// employees is a private property 
// and hence cannot be set from outside the class
// accounting.employees.push("Anna");
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe()   gives error becoz that constructor wasnt invoked for this.
