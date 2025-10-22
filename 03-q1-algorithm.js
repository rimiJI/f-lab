/**
 * Find Two Numbers that Add Up to Target
 *
 * You are given an array of numbers (`nums`) and a number (`target`).
 * 
 * Your goal is to find two different numbers in the array that add up to the target.
 * Return their indices (positions) in the array.
 * 
 * You can return the answer in any order.
 * You may assume there is exactly one pair that works.
 * 
 * ----------------------------
 * Example 1:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * Example 2:
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 * Explanation: nums[1] + nums[2] = 2 + 4 = 6
 * 
 * Example 3:
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 3 + 3 = 6
 * ----------------------------
 *
 * ⚙️ Constraints:
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15];
let target = 9;
/*
forloop로 돌리면서 target에서 뺀 값을 - 그 값이 있는지 또 for로 돌리면서 일치하는 것 확인 
두개의 값이 들어갈 [ , ]
시간복잡도: O(n²)
공간복잡도: O(1) _굳이 따지자면 새로 생긴 [,]
*/

function findTwoNumbers(nums, target) {
  // TODO: Find two indices i, j where nums[i] + nums[j] === target
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
console.log(findTwoNumbers(nums, target));

/* forloop로 돌리면서 target에서 뺀 값을 set에 add한담에 - 그 값이 있는지 set으로 만들어서has로 확인 */
function findTwoNumbers2(nums, target) {
  let seenMap = new Map(); //{값:인덱스}
  for (let i = 0; i < nums.length; i++) {
    const oneside = target - nums[i]; //짝 찾기 . 반복할때마다 새로 만들어지는 상수
    console.log(`현재값: ${nums[i]}, 필요한값: ${oneside}`);
    //기존에 있으면 꺼내기
    if (seenMap.has(oneside)) {
      console.log(`✅ 찾음! (${oneside} + ${nums[i]} = ${target})`);
      return [seenMap.get(oneside), i];
    } //i가 뽑아낼 인덱스
    //기존에 본거에 없으면 맵에 추가 {값:인덱스}
    seenMap.set(nums[i], i);
  }
}

console.log(findTwoNumbers2(nums, target));
