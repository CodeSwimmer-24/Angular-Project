// interface

export interface User {
  name: string;
  age: number;
  id: number;
  email?: string;
}

let user: User = { name: "John", age: 12, id: 1 };

interface Employees extends User {
  salary?: number;
}

let employee: Employees = { name: "John", age: 12, id: 1, salary: 2000 };

export interface Login {
  Login(): User;
}

// Array Destructuring and Object Destructuring

let { name: userName, age: userAge }: User = { name: "John", age: 12, id: 1 };

let [user1, user2, ...rest]: User[] = [
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
