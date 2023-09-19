"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    static getDirections() {
        return 50;
    }
    get empId() {
        return this.id;
    }
    set empId(newId) {
        this.id = newId;
    }
    getAddress() {
        // return this.address + " " + this.name;
        return `${this.address} + ${this.name}`;
    }
    Login() {
        return { name: "John", age: 12, id: 1 };
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
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
//# sourceMappingURL=classes.js.map