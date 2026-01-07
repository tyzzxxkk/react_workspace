// let person = {
//     name:"기태연",
//     age: 19,
//     hobby: "영화"
// };

// let isName = "name" in person;

// let person1 = person;
// if(person === person1) {
//     console.log("같다");
// } else {
//     console.log("다르다");
// }

let array1 = new Array();
let array2 = [];
array1[0] = "첫번째";
array1[1] = 10;
console.log(array1);

let array3 = [1, 2,3, true, "hello", null, undefined, () => {}, {}, []];

for(let i = 0; i < 10; i++) {
    console.log(array3[i]);
}

let array4 = [1, 2, 3];
let [one, two, three] = array4;
console.log(one);
console.log(two);
console.log(three);

const func = ({name, age, hobby}) => {
    console.log(name, age, hobby);
};

func(person);