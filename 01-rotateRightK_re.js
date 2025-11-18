let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotateRightK(arr, k) {
  for (let i = 0; i < k; i++) {
    let lastNumber = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) arr[i] = arr[i - 1];
    arr[0] = lastNumber;
  }
  return arr;
}

console.log(rotateRightK(nums, k));

/* ⚙️조건 :  reverse, set, sort 등 메소드를 사용하지 않고 직접 값을 변경한 값은 반환하여라. 
>>>>.
$  Q1 내 풀이 🧐🧐🧐
배열 값인 nums에 여러 숫자가 있다. 
하나의 값인 k 만큼 오른쪽으로 회전시킨 값을 반환한다. 

- for loop로 k 만큼 회전을 반복한다. 
맨 뒤의 값을 변수로 따로 빼 저장하고,
- for loop로 뒷 값부터 다음 위치로 이동한다.이동이 모두 끝나면
비어있는 맨 첫번째 자리에 아까 따로 뺀 맨 뒷값을 할당한다.
예시 : k = 3
1회 반복예시 
	{
  맨 뒤 값을 arr[0]번에 넣고 
	arr[마지막전]번을 arr[마지막]번에 ... 이걸 0번까지 반복
  arr[0] 첫번째 값에 마지막 할당 
  }
2회 반복예시 
	{
  맨 뒤 값을 arr[0]번에 넣고 
	arr[마지막전]번을 arr[마지막]번에 ... 이걸 0번까지 반복
  arr[0] 첫번째 값에 마지막 할당 
  }
3회 반복예시 
	{
  맨 뒤 값을 arr[0]번에 넣고 
	arr[마지막전]번을 arr[마지막]번에 ... 이걸 0번까지 반복
  arr[0] 첫번째 값에 마지막 할당 
  }
for loop로 k 만큼 회전 반복이 끝나면 
arr값을 반환한다

공간복잡도는 O(1)이다. 새로 늘어난 값이 없고 배열 안에 교체만 해서.
시간복잡도는 O(n^2)이다. for loop 2개를 중첩했기 때문. 
$ 🧐🧐🧐 */
