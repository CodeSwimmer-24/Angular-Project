// Writing functions in TypeScript

function add(a: number, b: number): number {
  return a + b;
}
let res = add(10, 20);
console.log(res);

// To declare  a optional parameter

function sub(a: number, b: number, c?: number): number {
  return a - b;
}
let subres = sub(10, 20);
console.log(subres);

// Taking array as a parameter

const fun = (a: number, b: number, ...arr: number[]): number => {
  return arr.reduce((a, b) => a + b);
};

const arr = [10, 20, 30];
const ff = fun(10, 20, ...arr);
console.log(ff);

// Generic Functions
// Generic functions are the kind of functions that take any data type as a argument and convert that in Array or anything we want

function getItems<Type>(item: Type[]): Type[] {
  return new Array<Type>().concat(item);
}
getItems<number>([1, 2, 3, 4, 5]);
getItems<string>(["a", "b", "c", "d", "e"]);
