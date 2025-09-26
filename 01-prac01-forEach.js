//step 1 .
const nums = [1, 2, 3, 4, 5];
nums.forEach((v) => {
  console.log(v);
});

//step 2 .
const scores = [1, 2, 3, 4];
let total = 0;
scores.forEach((v) => {
  total += v;
});
console.log(total);

//step 3 - 지난번 짝수만 더하시오 문제
total = 0;

scores.forEach((v) => {
  if (v % 2 == 0) {
    total += v;
  }
});
console.log(total);

//step 3 - 조건이 들어간 forEach
//글자 수가 5 이상인 과일
const fruits = ["apple", "banana", "kiwi", "grape"];
const longFruits = [];
fruits.forEach((v) => {
  if (v.length > 4) {
    longFruits.push(v);
  }
});
console.log(longFruits);

//step 4 - 객체 배열
//성인(20세 이상)만 이름을 대문자로 바꿔 adultNames 배열에 담아 출력
const users = [
  { name: "Mo", age: 22 },
  { name: "Jin", age: 17 },
  { name: "Ara", age: 30 },
];
const adultNames = [];

users.forEach((v) => {
  if (v.age > 20) {
    v.name = v.name.toUpperCase();
    adultNames.push(v);
  }
});
console.log(adultNames);
