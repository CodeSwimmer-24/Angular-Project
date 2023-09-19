let lname: string;

let age: number;

let adult: boolean;

let numbers: number[];

let allNum: Array<number>;

const enum Color {
  "black",
  "white",
  "yellow",
}

let c: Color = Color.black;

allNum = [1, 2, 3, 4, 5];

// let result: Array<string>;

let result = allNum.filter((num) => num > 2);
console.log(result);

lname = "Jonathan";
age = 11;
adult = false;

console.log(lname, age, adult);

// Touples
// Use Case = functions returning multiple values

let swapNumbers: [firstNum: number, secondNum: number];

function swapNum(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNumbers = swapNum(10, 20);
swapNumbers[0];
swapNumbers[1];

// Any

let dep: any;
dep = "Yq";
dep = 2;
