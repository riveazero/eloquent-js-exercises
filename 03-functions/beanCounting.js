function countBs(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'B') count++;
    }
    return count;
}

function countChar(s, char) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === char) count++;
    }
    return count;
}
