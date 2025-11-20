/**
 * Filter Prime Numbers from an Array - 배열에서 소수 찾기
 *
 * 자, 다시 소수 찾기에요. 대신 배열이 주어지고 그 안에서 찾는거에요.
 *
 * 함수를 한번 만들어 보시구요. 양수의 배열 nums가 들어올거에요.
 * 소수만 찾아 반납하시면 되요.
 *
 * ----------------------------
 * Example 1:
 * Input:  nums = [1, 2, 3, 4, 5, 6, 7]
 * Output: [2, 3, 5, 7]
 *
 * Example 2:
 * Input:  nums = [10, 11, 12, 13, 14, 15]
 * Output: [11, 13]
 *
 * Example 3:
 * Input:  nums = [0, 1, 4, 8, 9]
 * Output: []
 * ----------------------------
 *
 * Constraints:
 * 0 <= nums[i] <= 10^6
 */
/* 
배열 하나씩 돌아가면서 검토하고
참이면 배열에 추가하고, 아니면 다음으로 넘어가라.  
*/

/* 
배열 하나씩 돌아가면서 검토하는데
값이 1이 이거나 
2부터 값까지 나누었을때 나머지가 0이면 다음으로 넘어가라.
그렇지않다면 배열에 추가해라
 */

function filterPrimes(nums) {
  const newNums = [];

  for (let i = 0; i < nums.length; i++) {
    let addPrime = true; //매번 검토해야하니, for문안에 위치
    if (nums[i] === 1) addPrime = false;
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        addPrime = false;
      }
    }
    if (addPrime === true) {
      newNums.push(nums[i]);
    }
  }

  return newNums;
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7])); // [2, 3, 5, 7]
console.log(filterPrimes([10, 11, 12, 13, 14, 15])); // [11, 13]
console.log(filterPrimes([0, 1, 4, 8, 9])); // []
console.log(filterPrimes([17, 18, 19, 20, 21, 22, 23])); // [17, 19, 23]
console.log(filterPrimes([29, 30, 31, 32, 33, 34, 35])); // [29, 31]
console.log(filterPrimes([])); // []
console.log(filterPrimes([2])); // [2]
console.log(filterPrimes([1])); // []
console.log(filterPrimes([0, 0, 0])); // []
