let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((item, item2) => item.concat(item2));

console.log(arrays);
// → [1, 2, 3, 4, 5, 6]
