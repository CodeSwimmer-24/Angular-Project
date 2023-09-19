"use strict";
// interface
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", age: 12, id: 1 };
let employee = { name: "John", age: 12, id: 1, salary: 2000 };
// Array Destructuring and Object Destructuring
let { name: userName, age: userAge } = { name: "John", age: 12, id: 1 };
let [user1, user2, ...rest] = [
    {
        name: "John",
        age: 12,
        id: 1,
    },
    {
        name: "John",
        age: 12,
        id: 2,
    },
    {
        name: "John",
        age: 12,
        id: 3,
    },
];
//# sourceMappingURL=Interfaces.js.map