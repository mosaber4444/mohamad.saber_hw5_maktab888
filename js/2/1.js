// q2

let list = [10, [25, 13, [22, 14, [111, [555, [54]]]]], [14, [55]]];

function flatArray(arr) {
    return String(arr).split(',')
}

console.log(flatArray(list));

//best practice
const arr = [1, 2, 3, 4, [5, 6, [6, 7], 7, 8]]

let arr2 = [];

function flat(arr) {
    arr.forEach(element => {
        if (typeof (element) == 'object') {
            flat(element);
        } else {
            arr2.push(element);
        }
    });
}

flat(arr);

console.log(arr2);

