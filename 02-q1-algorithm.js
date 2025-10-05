/**
You are building a shopping list app.
The list of items is stored in an integer array nums, where each number represents a specific product ID.

Before the user goes shopping, the app needs to check if they accidentally added the same product more than once.

Write a function that returns true if any product appears at least twice in the list,
and false if every product is unique.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
 */

/**
배열 nums에는 음수, 양수 모든 무작위의 값이 들어있다.
이 배열에 중복된 값이 있으면 true를 반환하고, 그렇지 않으면 false를 반환하라.
for loop로 첫번째 값부터 하나씩 배열을 순회하면서
    for loop로 돌아가면서 같은 값이 있는지 확인한다.
    만약 같은 값이 있으면 바로 true를 반환한다.
모든 값 같은값있는지 순회반복하다가 없으면 false를 반환 한다.

공간복잡도는 O(1)이다. 새 변수선언, 재할당도 없었기 때문
시간복잡도는 O(n^2)다. nested for loop이기 때문 (edited) 
 */
let nums = [1, 2, 0, 3, 4, 5, 1, 7];
// 1번 나왔음
// 앞에 2가 나왔나? 안나왔네. 2적어놓고
// 앞에 0, 0 적고
// 3? 3 적고
// 1 나왔나? 나왔네. true

// https://ko.javascript.info/map-set

let a = [1, 2, 0, 3, 4, 5];
function containsDuplicate(arr) {
  //newnums변수선언 배열
  let newnums = new Map(arr); // { : ,: ,}
  for (let i = 0; i < arr.length; i++) {
    if (!newnums.has(arr[i])) {
      // 못찾았다.
      map.set(i, arr[i]); // (0 , 1) , (1, 2), (2, 0), (3, 3), (4, 4)
    }
    // 찾았다! true 리턴
    return false;
  }
  return true;

  // 이 배열에 중복된 값이 있으면 true를 반환하고, 그렇지 않으면 false를 반환하라.

  //배열을 하나씩 돌아가면서
  //만약newnums에 없니?
  //없으면 새 배열에 추가해라
  //없으니깐 true리턴하여라

  for (let i = 0; i < arr.length; i++) {
    for (let v = i + 1; v < arr.length; v++) {
      if (arr[i] === arr[v]) return true;
    }
  }
  return false;
}

console.log(containsDuplicate(nums));

function buildSet() {}
