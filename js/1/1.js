// q1

let list = [10, [25, 13, [22, 14, [111, [555, [54]]]]], [14, [55]]];
let list2 = [10, 2];

function sumArray(arr) {
    arr = String(arr);
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ",") {
            sum++;
        }
    }
    return sum;
}

function isArrAllCount(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return false;
        }
    }
    return true;
}

function arrayDepth(arr) {
    if (Array.isArray(arr)){

    }else {
        return 'this is not array';
    }
    if (isArrAllCount(arr)) {
        return 1;
    }
    let sum = 1;
    for (let i = 0; i < sumArray(arr); i++) {
        arr = arr.flat();
        if (isArrAllCount(arr)) {
            sum++;
            return sum;
        } else {
            sum++;
        }
    }
}

console.log(arrayDepth(list));

//best practice
function getArrayDepth(value) {
  return Array.isArray(value) ?
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;
}

let testRy = [1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]

console.log(testRy);

console.log(getArrayDepth(testRy))
