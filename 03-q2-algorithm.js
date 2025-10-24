/* 
Sum Odd Numbers Deep
중첩된 배열 (nested arrays) 속에 있는 모든 홀수들의 합을 반환
 */

/*
방법1. forloop로 회전하면서 만약 원소가 어레이냐? 아니냐? 
어레이다 - 시간과공간의 방으로 가 ( 재귀 ) 
어레이 아님 && 홀수임 - 덧셈스칼라에 더하셈
변수공간 : 덧셈스칼라 , 원소가어레이일 경우
시간복잡도: O(n) 모든 원소를 한번씩만 돌기때문에
공간복잡도: O(k) k는 oddSum이 반복해서 생겨난 횟수. 
공간복잡도 이유: JS는 함수 호출시, 새 scope를 생성하고 그 안에 변수 저장하고 끝나면 pop💥 
               그래서 다른 호출과 섞기지❌, 한 이름이 재사용❌, 계속 생겼다 없어지길 반복.
*/
var sumOddNumbersDeep = function (nums) {
  let oddSum = 0; //처음호출에만 존재
  for (i of nums)
    if (Array.isArray(i)) {
      oddSum += sumOddNumbersDeep(i);
      //이렇게 새롭게 재귀 불러오면 기존 sum결과를 더해줘야함
      //처음엔 그냥 sumOddNumbersDeep(i) 만 했었음
    } else {
      if (i % 2 !== 0) {
        oddSum += i;
      }
    }
  return oddSum;
};

console.log(sumOddNumbersDeep([1, [2, 3], [4, [5, 6]]]));
console.log(sumOddNumbersDeep([[2, [4]], 6]));
console.log(sumOddNumbersDeep([7, [-3, [10, [-5]]]]));
console.log(sumOddNumbersDeep([]));
console.log(sumOddNumbersDeep([1, 3, 5, 7, 9]));
