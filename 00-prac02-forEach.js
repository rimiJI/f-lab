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

// test5결과 undefined
//돌아가면서 실행만 해줄뿐 공허하게 return값 암시롱도 없음
console.log(
  "test5결과",
  a.forEach((a) => a * 3)
);

// test6결과 [ undefined, undefined, undefined, undefined, undefined, undefined ]
console.log(
  "test6결과",
  a.map((a) => {
    a * 3;
  })
);
// test7결과 [ 3, 6, 9, 12, 15, 18 ]
//배열을 return
console.log(
  "test7결과",
  a.map((a) => a * 3)
);

// test8결과 [ 1, 2 ]
//배열을 return
console.log(
  "test8결과",
  a.filter((a) => a < 3)
);

//test9결과 21
//값을 return
console.log(
  "test9결과",
  a.reduce((sum, v) => sum + v)
);

/* 
.forEach() VS map/filter/reduce
return값의 유무 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#%EC%84%A4%EB%AA%85
( map()과 달리 forEach()는 항상 undefined를 반환하므로 체이닝할 수 없습니다. )


test6:블록있음 VS test7:블록없음
{}있음 - return 적어줘야함 . 안그러면 undefined.
출처: https://javascript.info/arrow-functions-basics
(`(...args) => expression` ~ returns the result)
( `(...args) => { body }`  we need an explicit return to return something.)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%ED%95%A8%EC%88%98_%EB%82%B4%EB%B6%80
 */
