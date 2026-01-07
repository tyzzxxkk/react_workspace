let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});