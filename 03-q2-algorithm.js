/* 
Sum Odd Numbers Deep
중첩된 배열 (nested arrays) 속에 있는 모든 홀수들의 합을 반환
 */

/*
방법1. 만약 원소가 어레이냐? 아니냐? 
어레이다 - 시간과생각의 방으로 가 ( 재귀 ) 
어레이 아님 && 홀수임 - 덧셈스칼라에 더하셈

변수공간 : 덧셈스칼라 , 원소가어레이일 경우
*/
var sumOddNumbersDeep = function (nums) {
  let sum = 0;
  for (i of nums)
    if (Array.isArray(i)) {
      sumOddNumbersDeep(i);
    } else {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  return sum;
};

console.log(sumOddNumbersDeep([1, [2, 3], [4, [5, 6]]]));

//뭐가 문제니
