// q3

let input = -2252552455861;

function separators(input) {
    if (typeof input !== 'number'){
        return 'input is not number'
    }
    let neg = false;
    if (input < 0) {
        neg = true;
        input = -input
    }
    let num = String(input);
    let len = num.length;
    let doThis = len % 3;
    let text = '';
    if (doThis !== 0) {
        text = num.slice(0, doThis) + ','
    }
    for (let i = doThis; i < len; i = 3 + i) {
        text = text + num.slice(i, i + 3) + ',';
    }
    text = text.slice(0, -1)
    if (neg) {
        text = '-' + text;
    }
    return text ;
}

console.log(separators(input))