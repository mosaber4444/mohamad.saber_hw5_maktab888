// q4

let text1 = 'Helloo word';
let text2 = 'helloo'

function caseInsensitiveSearch(text1, text2) {
    if (typeof text1 !== 'string' && typeof text2 !== 'string'){
        return 'this is not text ';
    }
    text1 = text1.toUpperCase()
    text2 = text2.toUpperCase()
    return text1.replace(text2, '   ') !== text1;

}

console.log(caseInsensitiveSearch(text1,text2))