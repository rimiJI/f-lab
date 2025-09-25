// Q1 .중복값 있는지?? (Leetcode.217)
//방법2.
// Complexity Time:O(n) , Space:O(n)
//시간복잡도 O(n) ▶new Set()으로 배열 순회하면서 Set에 넣음
//공간복잡도 O(n) ▶새 배열이 n길이만큼 늘어남
//Set으로 정렬한 것의 길이와 <> 원본 길이가 일치하는가??
let nums = [1, 2, 3, 1];

let containsDuplicate = function (nums) {
  const unique = new Set(nums);
  return unique.size !== nums.length; //오타주의 1) rength❌  2) Set에는 length 속성 없음 size
};

console.log(containsDuplicate(nums));

/*방법1.
❌Time Limit Exceeded
// Complexity Time:O(n²) , Space:O(1) 
let containsDuplicate = function (nums) {
  const newnums = [];
  for (let i = 0; i < nums.length; i++) {
    if (newnums.includes(nums[i])) {
      //includes → 내부적으로 선형 탐색이라서 O(n²) (includes가 매번 O(n) 이라 전체가 O(n²))
      return true;
    }
    newnums.push(nums[i]);
  }
  return false;
};
*/

/**
You are building a shopping list app. The list of items is stored in an integer array nums, where each number represents a specific product ID.

Before the user goes shopping, the app needs to check if they accidentally added the same product more than once.

Write a function that returns true {{if any product appears at least twice in the list}},
and false if every product is unique.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
 */
