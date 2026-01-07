// let arr1 = [1, 2, 3];
// let arr2 = [4, ...arr1, 5, 6];

let arr1 = [1, 2, 3];

function funcB(one, ...ds) {
    console.log(one);
    console.log(ds);
}
funcB(...arr1);