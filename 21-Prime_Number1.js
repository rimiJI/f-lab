/**
 * Check Prime Number (소수)
 *
 * 이번엔 소수를 계산하는 함수를 만들어 볼꺼에요.
 * 소수는 1보다 크면서 다른 숫자로는 나눠지지 않는 숫자에요.
 * 예를들면, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
 *
 * 함수에 양수 n이 들어오고, 그게 소수다? true
 * 아니다? false
 *
 * ----------------------------
 * Example 1:
 * Input:  n = 2
 * Output: true
 * Explanation: 2 is only divisible by 1 and 2.
 *
 * Example 2:
 * Input:  n = 10
 * Output: false
 * Explanation: 10 is divisible by 2 and 5.
 *
 * Example 3:
 * Input:  n = 13
 * Output: true
 * Explanation: 13 is only divisible by 1 and 13.
 * ----------------------------
 *
 *
 * Constraints:
 * 1 <= n <= 10^6
 */
/* 
1이외의 수. 
forloop로 값을 나누어보면서 
한번이라도 나누어 떨어지면 false 

 */

function isPrime(n) {
  // TODO
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(10)); // false

console.log(isPrime(100)); // false

console.log(isPrime(29)); // true
