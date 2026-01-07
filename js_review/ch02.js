var var2 = 1;
const VAR3 = 1; //상수

var var2 = 4;
function test() {
  console.log("선언적 함수");
}
test(); //선언 함수 호출

let var1 = function () {
  console.log("익명 함수");
};
var1(); // 익명 함수 호출

let var4 = (var4a) => {
  console.log(var4a + "화살표 함수");
};

let var5 = () => {
  console.log("콜백함수");
}; //매개변수를 함수로 받아서 실행시키는 것을 콜백함수라 한다.

var4(var5);

// console.log(var1);

let myName = "미림";
console.log(`저의 이름은 ${myName} 입니다.`); //템플릿 문자열
//백틱 `

let isEmpty = false;
let result1 = true && false;

//Truthy 와 Falsy
// : 참이나 거짓을 의미하는 않는 값도 조건문내에서는 판단되는 값을 의미
//false (false,0, (-0), null, undefined, NaN, "", ..) 빼고 다 true

let truthyVar = "hi";
if (truthyVar) {
  console.log("true취급");
} else {
  console.log("false 취급");
}

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
let per = {
  name: "홍길동",
};
printName(per);
