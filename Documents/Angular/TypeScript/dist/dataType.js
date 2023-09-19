"use strict";
let lname;
let age;
let adult;
let numbers;
let allNum;
let c = 0 /* Color.black */;
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
let swapNumbers;
function swapNum(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNum(10, 20);
swapNumbers[0];
swapNumbers[1];
// Any
let dep;
dep = "Yq";
dep = 2;
//# sourceMappingURL=dataType.js.map