function range(start, end, step=1) {
    let result = [];
    if (end < start) {
        for (let i = start; i >= end; i += step) {
          result.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }

    return result;
}


function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    
    return total;
}
