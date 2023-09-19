"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getAddress() {
        // return this.address + " " + this.name;
        return `${this.address} + ${this.name}`;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let jon = new Employee(1, "John", "New York");
let man = new Manager(2, "Man", "New York");
jon.getAddress();
const aaa = man.getAddress();
console.log(aaa);
// jon.id = 1;
// jon.name = "John";
// jon.address = "New York";
