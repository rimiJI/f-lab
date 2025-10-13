/* 
Q5. 빈도수 높은 숫자 찾기
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
		A와 B 비교해서 - B가 더 크면
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

/*
1.loop로 돌리면서 map에 추가하고
2.values를 하나씩 돌리면서, 최대값 [키,값] 을 변수에 넣고 계속 비교하면서 업데이트한다. 
이렇게 하는 이유: map은 키입력->값찾기 가능/ 값입력->키찾기 불가능. 그러므로 [키,값]을 변수선언하여 최댓값을 업데이트 한다.
*/

let nums = [1, 1, 1, 2, 2, 2, 3, 2, 2, 3];
let nums2 = [1, 3, 3, 3, 2, 2, 3];

function FrequencyNum2(a) {
  let numsMap = new Map();
  let bigCount = [0, 0];
  //순회하며 map에 저장
  for (let i = 0; i < a.length; i++) {
    if (numsMap.has(a[i])) {
      //이거 아님 numsMap.get(a[i])+=1;
      numsMap.set(a[i], numsMap.get(a[i]) + 1);
    } else {
      numsMap.set(a[i], 1);
    }
  }
  //순회하며 values 중 최대 값 찾기
  for (let [k, v] of numsMap) {
    //순회 값이 최대값보다 클 경우 갱신
    if (v > bigCount[1]) {
      bigCount = [k, v];
    }
  } //회전이 모두 끝나고
  //최대키값 출력
  return bigCount[0];
}
console.log(FrequencyNum2(nums));
console.log(FrequencyNum2(nums2));
