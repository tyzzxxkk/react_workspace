console.log("값:", var1);
console.log(getArea(10, 5));

function getArea(width, height) {
    let area = width * height;
    return area;
}

var var1 = 10;
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
}); 