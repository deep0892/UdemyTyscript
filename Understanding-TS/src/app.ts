class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
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

