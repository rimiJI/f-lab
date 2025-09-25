// Q1 . Array 값을 K스텝씩 오른쪽으로 회전시키기. (Leetcode.189 )
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
// Complexity Time:O(n) , Space:O(1)
//시간복잡도 O(n)▶while문 하나.
//공간복잡도 O(1)▶스칼라변수 하나만 선언 (복사형 배열 메서드를 사용안함 )
rotate = function (nums, k) {
  const swapRev = function (l, r, nums) {
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  };
  const len = nums.length;
  k %= len; //회전값k가 전체길이len보다 클 때, 회전후 유의미한 값만 남기기 위해, 몫값인 k 를 실질적 rotate값으로
  swapRev(0, len - 1, nums); //전체뒤집 (index 넘버로 들어가니, []안 실제 값을 가르키고 싶을땐 -1 )
  swapRev(0, k - 1, nums); //k번째까지 자른거 뒤집
  swapRev(k, len - 1, nums); //k+1번째~끝까지 자른거 뒤집

  return nums;
};

console.log(rotate(nums, k));
/*풀이
      -(l, r, nums)여기서 l,r은 배열 양 끝
      -만약 l가 r보다 순서가 앞이라면 (순서규칙이 false라면 멈춰라)
      --nums l과 r의 내용를 바꿔라 (swap)
      --그리고 l과 r의 순서를 한단계식 안쪽으로 */
/*Destructuring 구조분해할당 中 swapping variables
    -출처: MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#swapping_variables
    --영문에는 있으나 국문 DOC에는 없음

    -단일 스칼라 변수값에 임시로 빼는 방법도 있다.(전통적 swap 방법)
    -- 그치만 그건 현재 내 실력으로 너무 헷갈림.....*/
/*전통적 swap 방법  
    const t = arr[l]; // 1. 왼쪽 값을 임시 변수 t에 저장.(변수 t는 그저 입력데이터로, 공간복잡도 상승에 무의미한 역할. )
    arr[l] = arr[r]; // 2. 오른쪽 값을 왼쪽 칸에 덮어씀
    arr[r] = t; // 3. 아까 저장해둔 왼쪽 값을 오른쪽 칸에 넣음*/

//
//
//
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
