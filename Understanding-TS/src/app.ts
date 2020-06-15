class Department {
  // private readonly id: string;
  // public name: string;
  // Protected properties can be accessed from child classes
  protected employees: string[] = [];

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

// Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const it = new ITDepartment('d2', ['Max']);
it.describe();


class AccountingDepartmnent extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name != 'Max') {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const newAccounting = new AccountingDepartmnent('d3', []);
// Throws error no report was added
// console.log(newAccounting.mostRecentReport);
// newAccounting.mostRecentReport = '';
newAccounting.mostRecentReport = 'New Report';
newAccounting.addReport('First Report');
newAccounting.addReport('Second Report');
newAccounting.addEmployee('Max');
newAccounting.addEmployee('Mann');
console.log(newAccounting);
console.log(newAccounting.printReports());
console.log(newAccounting.printEmployeeInformation());
console.log(newAccounting.mostRecentReport);

