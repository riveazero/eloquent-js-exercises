let size = 8;

for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        console.log(' #'.repeat(size / 2));
    } else {
        console.log('# '.repeat(size / 2));
    }
}

/* ** As a function ** 

function chessboard(size=8) {
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            console.log(' #'.repeat(size / 2));
        } else {
            console.log('# '.repeat(size / 2));
        }
    }
}

*/