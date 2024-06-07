function merge<T extends object, K extends object> (objA: T, objB: K): T & K {
    return Object.assign({}, objA, objB);
}


const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

console.log(merge(objA, objB));