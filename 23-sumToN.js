/**
 * Sum to N
 *
 * 양수 n (n >= 1)이 주어졌을 때,
 * 1부터 n까지의 모든 양수의 합을 구하는 함수를 작성하시면 되요.
 *
 * Input:
 *  - n: number (1 <= n <= 10^9)
 * Output:
 *  - number (1부터 n까지의 합)
 *
 * Example 1:
 *  Input:  n = 3
 *  Output: 6   // 1 + 2 + 3
 *
 * Example 2:
 *  Input:  n = 1
 *  Output: 1
 *
 * Hint를 드리자면... 중학교?때 배운 가우스 함수를...
 */

/* 
n을 앞뒤쌍으로 더하면  
n의 절반만큼의 쌍이 나온다.(두개씩 묶으니) 

예를들어 
5면 
(5+1)5/2 
*/

function sumToN(n) {
  return ((n + 1) * n) / 2;
}

console.log(sumToN(3)); // 6
console.log(sumToN(5)); // 15
console.log(sumToN(10)); // 55
console.log(sumToN(1)); // 1
console.log(sumToN(100)); // 5050
console.log(sumToN(1000000)); // 500000500000
