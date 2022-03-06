function every(array, test) {
    for (item of array) {
   	  if (!test(item)) return false; 
    }
    return true;
}


/* ** Using some() **

function every(array, test) {
    return !array.some(item => !test(item))
}

*/
