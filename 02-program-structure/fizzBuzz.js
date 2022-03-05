let limit = 100;

for (let i = 0; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
}

// ** With a function ** 

let fizzBuzz = function(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

let limit = 100;

for (let i = 0; i < limit; i++) {
    console.log(fizzBuzz(i));
}