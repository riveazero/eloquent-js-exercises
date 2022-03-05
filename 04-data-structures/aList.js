function arrayToList(array) {
    if (array.length === 1) {
        return {value: array[0], rest: null};
    }
    let list = {};
    list.value = array[0];
    list.rest = arrayToList(array.slice(1));
    return list;
}


function listToArray(list) {
    let array = [];
    for (let i = list; list; list = list.rest) {
        array.push(list.value);
    }
    return array;
}


function prepend(element, list) {
    return {value: element, rest: list};
}


function nth(list, index) {
    return listToArray(list)[index];
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
