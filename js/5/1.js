// q5

let arr = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"];

function validation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== 7) {
            return false;
        }
        for (let index = 1; index <= 5; index = index + 2) {
            if (arr[i][index] !== '-') {
                return false;
            }
        }
    }
    return true;
}

function presentationGroup(arr) {
    if (validation(arr) !== true) {
        return 'this is not valid'
    }
    arr = arr.toLocaleString()
    arr = arr.replaceAll('-', '')
    arr = arr.replaceAll(',', '')
    let Arr1 = [];
    for (let i = 0; i < arr.length; i = i + 4) {
        Arr1.push(arr[i])
    }
    Arr1 = [...new Set(Arr1)]
    let Arr2 = [];
    for (let i = 1; i < arr.length; i = i + 4) {
        Arr2.push(arr[i])
    }
    Arr2 = [...new Set(Arr2)]
    let Arr3 = [];
    for (let i = 2; i < arr.length; i = i + 4) {
        Arr3.push(arr[i])
    }
    Arr3 = [...new Set(Arr3)]
    let Arr4 = [];
    for (let i = 3; i < arr.length; i = i + 4) {
        Arr4.push(arr[i])
    }
    Arr4 = [...new Set(Arr4)]
    // noinspection UnnecessaryLocalVariableJS
    let list;
    list = [Arr1, Arr2, Arr3, Arr4,];
    return list ;
}

console.log(presentationGroup(arr))