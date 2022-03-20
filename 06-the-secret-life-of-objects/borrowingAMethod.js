/*
Fix the line:
    console.log(map.hasOwnProperty("one"));
*/

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true