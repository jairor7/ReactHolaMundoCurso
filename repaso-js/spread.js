const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3, 4];

fn(...arr);

const arr1 = [5, 6];

/* Los spread operator son copias de los arrays originales */
// const arr2 = arr.concat(arr1)
// const arr2 = [...arr, ...arr1];
const arr2 = [...arr, 2, 3];

console.log(arr2);

/* Para objetos tambien se usan spread operator */

const obj = {a: 1, b: 2, c: 3}
const obj1 = {a: 1, b: 2, d: 3}
const obj2 = {d: 1, e: 2, f: 3}

const obj3 = {...obj,...obj2}
const obj4 = {...obj1,...obj2}
obj.a = 10
console.log(obj3, obj);
console.log(obj4);
