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
// 1번 나왔음
// 앞에 2가 나왔나? 안나왔네. 2적어놓고
// 앞에 0, 0 적고
// 3? 3 적고
// 1 나왔나? 나왔네. true

// https://ko.javascript.info/map-set

let nums = [1, 2, 0, 3, 4, 5, 1, 7];

let a = [1, 2, 0, 3, 0, 5];
let b = [1, 2, 0, 3, 4, 5];
function containsDuplicate2(arr) {
  let numsMap = new Map(); //{:,:,:} 빈 맵 만들기

  for (let i = 0; i < arr.length; i++) {
    if (!numsMap.has(arr[i])) {
      //numsMap에 없다면 (key로 값을 저장해야 has로 찾기가 가능)
      numsMap.set(arr[i], i); //set으로 추가해라
    } else {
      //있으면
      return true; //true 반환
    }
  }
  return false; //for문 다 돌때까지 계속 없으면 false.
}
console.log(containsDuplicate2(a));
console.log(containsDuplicate2(b));

/* 
공간복잡도:O(n) , numsMap 변수 만듦
시간복잡도:O(n) , for loop 한번만 회전하고 O(n) + Map의 key를 찾는 has는 O(1) 
            근거: 복잡성이 O(N)보다 더 나은 경우 내부적으로 해시 테이블(O(1) 룩업), 검색 트리(O(log(N)) 룩업) 또는 기타 데이터 구조로 표현될 수 있습니다.
            링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map#%EC%84%A4%EB%AA%85
*/

/* 키는 유일성을 띈다. 같은 키 또 저장하면 값이 바뀌기만 함
이를 활용해 Map문제를 푼다면?
빈 맵을 변수선언하고
for loop로 계속 추가한다음에
.size로 개수 세기 === arr.length 면 true, 아니면 false */
function contains3(arr) {
  let numsMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    numsMap.set(arr[i], i);
  }
  if (numsMap.size === arr.length) {
    return false;
  } else {
    return true;
  }
}

console.log(contains3(a));
console.log(contains3(b));

// 시간공간복잡도는 위와 동일하다. 이유도 같다.
