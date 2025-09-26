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
  const arrMap = arr.map((v) => (v % 2 == 0 ? v : 0)); //[0, 2, 0, 4, 0, 6]
  arrMap.forEach((v) => {
    evensum += v;
  });
  return evensum;
};
console.log("1-1evenSumMap: ", evenSumMap(a));

//1-2) for문 + map 사용
evenSumMap = function (arr) {
  let evensum = 0;
  arr = arr.map((v) => (v % 2 == 0 ? v : 0)); //[0, 2, 0, 4, 0, 6]
  for (let i = 0; i < arr.length; i++) {
    evensum += arr[i];
  }
  return evensum;
};
console.log("1-2evenSumMap: ", evenSumMap(a));

//2. FILTER
//2-1) forEach문 + filter 사용
let evenSumFilter = function (arr) {
  let evensum = 0;
  // filter로 거르기
  const arrFilter = arr.filter((v) => v % 2 == 0); // [2, 4, 6]
  arrFilter.forEach((v) => (evensum += v));
  return evensum; //⚠️.forEach()문을 return값에 넣으면 안됨
};
console.log("2-1evenSumFilter: ", evenSumFilter(a));

//2-2) for문 + filter 사용
evenSumFilter = function (arr) {
  let evensum = 0;
  arr = arr.filter((v) => v % 2 == 0); // [2, 4, 6]
  for (let i = 0; i < arr.length; i++) {
    evensum += arr[i];
  }
  return evensum;
};
console.log("2-2evenSumFilter: ", evenSumFilter(a));

//3.REDUCE
//3-1) reduce + 삼항연산자(?:)
let evenSumReduce = function (arr) {
  return arr.reduce((sum, v) => (v % 2 == 0 ? sum + v : sum), 0); //초기값0
};
console.log("3-1evenSumReduce: ", evenSumReduce(a));

//3-2) reduce + if문
evenSumReduce = function (arr) {
  return arr.reduce((sum, v) => {
    if (v % 2 == 0) {
      return sum + v;
    } else {
      return sum;
      //삼항연산자에선 return안써줘도
      //여기선 꼭 적어야 밖으로 튀어나옴
    }
  }, 0);
};
console.log("3-2evenSumReduce: ", evenSumReduce(a));

//
////test log
//test1 [ false, true, false, true, false, true ]
console.log(
  "test1",
  a.map((a) => a % 2 == 0)
);

//test2 [ 0, 2, 0, 4, 0, 6 ]
console.log(
  "test2",
  a.map((a) => (a % 2 == 0 ? a : 0))
);

// test3 [ 2, 4, 6 ]
console.log(
  "test3",
  a.filter((a) => a % 2 == 0)
);

//test4 21
console.log(
  "test4",
  a.reduce((a, b) => a + b)
);
