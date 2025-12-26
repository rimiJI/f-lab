/**
 * Binary Search (이진 탐색)
 *
 * 정렬된 배열 nums와 찾고자 하는 값 target이 주어질 때, target의 인덱스를 반환합니다.
 * 존재하지 않으면 -1을 반환하세요.
 *
 * 조건:
 * 배열은 오름차순 정렬되어 있음
 * 시간 복잡도: O(log n)
 *
 * 참고: Linear Search -> https://www.youtube.com/watch?v=rHqg2ZsrMlg
 *      Binary Search -> https://www.youtube.com/watch?v=4Qh5Vsyh9TA
 * 두개의 방식을 비교해보세요!
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 중간 인덱스 계산
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // 찾았다!
    }

    if (nums[mid] < target) {
      // 중간 값보다 크면 오른쪽 탐색
      left = mid + 1;
    } else {
      // 중간 값보다 작으면 왼쪽 탐색
      right = mid - 1;
    }
  }

  return -1; // 못 찾았다? -1 반환
}

// 테스트
const nums = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(nums, 7)); // 3
console.log(binarySearch(nums, 1)); // 0
console.log(binarySearch(nums, 11)); // 5
console.log(binarySearch(nums, 4)); // 4가 없으니 -1
