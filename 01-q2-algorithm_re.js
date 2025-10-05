let nums = [1, 2, 3, 1];

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let v = i + 1; v < arr.length; v++) {
      if (arr[i] === arr[v]) return true;
    }
  }
  return false;
}

console.log(containsDuplicate(nums));

/* 
🧐 Q2. pseudo-code
배열 nums에는 음수, 양수 모든 무작위의 값이 들어있다. 
이 배열에 중복된 값이 있으면 true를 반환하고, 그렇지 않으면 false를 반환하라.

for loop로 첫번째 값부터 하나씩 배열을 순회하면서 
    for loop로 돌아가면서 같은 값이 있는지 확인한다. 
    만약 같은 값이 있으면 바로 true를 반환한다.
모든 값 같은값있는지 순회반복하다가 없으면 false를 반환 한다.

공간복잡도는 O(1)이다. 새 변수선언, 재할당도 없었기 때문
시간복잡도는 O(n^2)다. nested for loop이기 때문
*/
