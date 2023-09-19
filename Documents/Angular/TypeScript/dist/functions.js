"use strict";
// Writing functions in TypeScript
function add(a, b) {
    return a + b;
}
let res = add(10, 20);
console.log(res);
// To declare  a optional parameter
function sub(a, b, c) {
    return a - b;
}
let subres = sub(10, 20);
console.log(subres);
// Taking array as a parameter
const fun = (a, b, ...arr) => {
    return arr.reduce((a, b) => a + b);
};
const arr = [10, 20, 30];
const ff = fun(10, 20, ...arr);
console.log(ff);
// Generic Functions
// Generic functions are the kind of functions that take any data type as a argument and convert that in Array or anything we want
function getItems(item) {
    return new Array().concat(item);
}
getItems([1, 2, 3, 4, 5]);
getItems(["a", "b", "c", "d", "e"]);
//# sourceMappingURL=functions.js.map