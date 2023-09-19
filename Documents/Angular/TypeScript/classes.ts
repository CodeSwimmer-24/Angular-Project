import { Login, User } from "./Interfaces";

class Employee implements Login {
  protected id: number;
  name: string;
  address: string;

  static getDirections(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  get empId(): number {
    return this.id;
  }

  set empId(newId: number) {
    this.id = newId;
  }

  getAddress(): string {
    // return this.address + " " + this.name;
    return `${this.address} + ${this.name}`;
  }

  Login(): User {
    return { name: "John", age: 12, id: 1 };
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
  //   getAddress(): string {
  //     // return this.address + " " + this.name;
  //     return `${this.address} + ${this.name}`;
  //   }
}

let jon = new Employee(1, "John", "New York");
let man = new Manager(2, "Man", "New York");
jon.empId = 20;

jon.getAddress();
const aaa = man.getAddress();
console.log(aaa);
Employee.getDirections();

// jon.id = 1;
// jon.name = "John";
// jon.address = "New York";
