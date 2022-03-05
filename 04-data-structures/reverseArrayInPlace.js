function reverseArrayInPlace(array) {
    let end = array.length - 1;
    for (let start = 0; start < Math.floor(array.length / 2); start++) {
        [array[start], array[end]] = [array[end], array[start]]; 
        end--;    
    }
    return array;
}