/**
 * Most Frequent Element
 *
 * Given an array `nums`, return the element that appears most frequently.
 * If multiple elements have the same highest frequency, return any one of them.
 *
 * Example:
 * Input: nums = [1,1,2,2,2,3]
 * Output: 2
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 */

/* 
🍀Q5. 빈도수 높은 숫자 찾기
 * Input: nums = [1,1,1,2,2,2,3,2,2,3]
 * Output: 2
조건: 최빈값이 여러개면 하나 아무거나 출력

필요공간: 
현재빈도수 A  ( 카운트로, 값이 계속 +추가&초기화 갱신됨 )
최대빈도수 B  ( 비교해보고 큰 값을 B에 넣는다. )
최대빈도숫자 C - 이것으로 반환, 초기값은 맨 앞값

1. 정렬하여 같은 값이 붙도록 한다. (sort(오름차순내림차준 중요하지않음))
2. 한번 스캔하면서 (forloop)
	- 만약 i 값이 이전 i-1값과 같으면 
		A++
	-만약 다르면.. 
		A와 B 비교해서 - A가 더 크면
		i를 C에 할당하고 
		B에 현재빈도수A를 넣기

		A는 1로 초기화
3.스캔이 다 끝나면 C를 반환하여라 
*/

/* 
A <-curCount
B <-maxCount
C <-maxNum
 */

let nums = [1, 1, 1, 2, 2, 2, 3, 2, 2, 3];

function FrequencyNum(arr) {
  //정렬 (오름내림상관X)
  arr.sort();
  console.log(`값이 정렬되었습니다. ${arr}`);

  let curCount = 1; //숫자 카운트 +
  let maxCount = 0; //빈도 높은 숫자의 빈도 수 (비교를 위함)
  let maxNum = arr[0]; //빈도높은 숫자👑

  for (let i = 1; i < arr.length; i++) {
    //동일한 숫자
    if (arr[i] === arr[i - 1]) {
      curCount += 1;
      console.log(`curCount 1을 추가합니다 ${curCount}`);
    }
    //숫자가 변경
    else {
      curCount = 1;
      console.log(`curCount 1초기화했습니다`);
      //
      if (curCount > maxCount) {
        maxCount = curCount; //최대빈도값 갱신
        maxNum = arr[i]; //현 상황 최대숫자
        curCount = 1; //카운트 초기화
      }
    }
  }
  //루프 끝나면 👑리턴
  return maxNum;
}

console.log(FrequencyNum(nums));

/*
시간복잡도: O(n(1+logn)) forloop 하나 , sort 하나
공간복잡도: O(n logn) sort 하나
*/

/*
🍀Q5.-2 빈도수 높은 숫자 찾기
 * Input: nums = [1,1,1,2,2,2,3,2,2,3]
 * Output: 2
조건: 최빈값이 여러개면 하나 아무거나 출력

필요공간:
map하나

1.array를 한번 스캔하면서(forloop)
    기존에 있다면 
        {숫자:빈도수}를 업데이트한다.
    기존에 없다면 
        map[숫자] = 1 로 초기값 등록
2.map의 값을 한번 스캔하면서 (for(let v of map.values()))

*/
