// Q1 . Array 값을 K스텝씩 오른쪽으로 회전시키기.
//방법1
// Complexity Time:O(n) , Space:O(n)
//시간복잡도 O(n) ▶for문으로 한번 돌려줬기때문에
//공간복잡도 O(n) ▶slice,concat으로 새 배열을 만들어 줬기 때문에
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let rotate = function (nums, k) {
  nums.reverse();
  const len = nums.length;
  k %= len;

  const first = nums.slice(0, k).reverse();
  const second = nums.slice(k).reverse();

  const newNums = first.concat(second);

  for (let i = 0; i < len; i++) {
    nums[i] = newNums[i];
  }
  return nums;
};

console.log(rotate(nums, k));

//방법2
// Complexity Time:  , Space:
//시간복잡도 ▶
//공간복잡도 ▶
rotate = function (nums, k) {};

/**
You are building a photo album app. The album stores several photos in order, represented as integer numbers in an array.

A user asks: "Can you bring the last photos to the front so I can see them first?"
In other words, you need to rotate the array to the right by k steps.

Write a program that rotates the array nums to the right by k steps.
(k is a non-negative integer.)

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
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

/**
You are working on a to-do list app. The tasks are stored in an integer array nums, where each number represents a task ID.

Sometimes, unfinished tasks are marked as 0.
Before showing the list to the user, the app wants to move all the unfinished tasks (0s) to the bottom, while keeping the order of the other tasks the same.

Important: You must do this in-place (without making a new copy of the list).

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Example 3:
Input: nums = [1,0,2,0,3,0]
Output: [1,2,3,0,0,0]
 */
