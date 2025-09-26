// 지난번 짝수만 더하시오 - .map(), .filter(), reduce()
//  짝수만 filler로 남기고, reduce로 누적계산해서 줄이기
let a = [1, 2, 3, 4, 5, 6];

// let sumEvenNumbers = function (arr) {
//   return arr.filter((x) => x % 2 == 0).reduce((x, y) => x + y);
// };
// console.log(sumEvenNumbers(a));

// //짝수만 map(함수):배열반환 짝수만 남기고, reduce(값두개)로 누적계산해서 줄이기
// sumEvenNumbers = function (arr) {
//   return arr.map((x) => (x % 2 == 0 ? x : 0)).reduce((x, y) => x + y);
// };
// console.log(sumEvenNumbers(a));

//각각의 method를 따로따로
// 1. MAP
//1-1) forEach문 + map 사용
let evenSumMap = function (arr) {
  let evensum = 0;
  const arrMap = arr.map((v) => (v % 2 == 0 ? v : 0));
  arrMap.forEach((v) => {
    evensum += v;
  });
  return evensum;
};
console.log("evenSumMap: ", evenSumMap(a));

//1-2) for문 + map 사용
evenSumMap = function (arr) {
  let evensum = 0;
  arr = arr.map((v) => (v % 2 == 0 ? v : 0));
  for (let i = 0; i < arr.length; i++) {
    evensum += arr[i];
  }
  return evensum;
};
console.log("evenSumMap: ", evenSumMap(a));

//2. FILTER
//2-1) forEach문 + filter 사용
let evenSumFilter = function (arr) {
  let evensum = 0;
  // filter로 거르기
  const arrFilter = arr.filter((v) => v % 2 == 0);
  arrFilter.forEach((v) => (evensum += v));
  return evensum; //⚠️forEach문을 return값에 넣으면 안됨
};
console.log("evenSumFilter: ", evenSumFilter(a));
