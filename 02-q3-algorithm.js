// 3-1.forloop로 풀기[존댓말]
let listA = ["amy", "bob", "carl", "bob"];
let listB = ["bob", "dana", "carl", "carl"];

function commonFriends(a, b) {
  let bothAscending = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      //값이 같거나, bothAscending에 없을 경우 추가
      if (a[i] === b[j] && !bothAscending.includes(a[i])) {
        bothAscending.push(a[i]);
      }
    }
  }
  return bothAscending.sort();
}
console.log(commonFriends(listA, listB));
// 3-1.forloop로 풀기[반말]
function commonFriends2(a, b) {
  let bothAscending = [];
}
/* 
Q3. 공통된 친구 찾기
문자열로 이루어진 두 배열이 있다. 공통으로 등장하는 문자열을 오름차순으로 반환하라.

3-1.forloop로 풀기
-bothAscending결과 배열을 만들고 
-listA 값 하나씩 돌리면서
-	listB 값 하나씩 돌리면서 listA와 같은지 확인하기
-		만약 같다면 bothAscending값에 추가하고 
-오름차순으로 정렬하라. 
for (let i=0;i<)

3-2.set으로 풀기
-setA, setB , 결과배열, 을 만들고 
-setA 값을 순회하면서 
-	만약 setB에 있다면(.has) 
-	결과배열에 추가하여라
순회가 다 끝나면
-정렬한 뒤 
-결과배열반환


Q4. 방문한 URL 기록
문자열로 이루어진 배열이 있다. 중복을 제외하되 순서는 보존시킨 값을 반환하라.
4-1.for loop로 풀기
4-2.Map으로 풀기
4-3.Set으로 풀기

Q5. 빈도수 높은 숫자 찾기
숫자로 이루어진 배열이 있다. 가장 많이 등장하는 수를 반환하라.
만약 가장 많은 빈도의 수가 여러개면 아무거나 반환하라.
5-1.객체로 풀기
5-2.Map으로 풀기

Q6. 친구 네트워크 찾기
2쌍의 문자로 구성된 2중 배열이 주어졌다. 각 문자와 매칭되는 문자들을 모두 묶어 반환해라.
>Map으로 키부분엔 각문자, 값 부분에는 매칭되는 모든 문자 
*/

/**
 * Common Friends
 *
 * Given two arrays of strings `listA` and `listB`, return an array
 * of names that appear in both lists. The result should be sorted in ascending order.
 *
 * Comparison is case-sensitive ("Tom" ≠ "tom").
 *
 * Example 1:
 * Input: listA = ["amy","bob","carl","bob"], listB = ["bob","dana","carl","carl"]
 * Output: ["bob","carl"]
 *
 * Example 2:
 * Input: listA = ["Tom","tom"], listB = ["tom"]
 * Output: ["tom"]
 *
 * Constraints:
 * - 0 <= listA.length, listB.length <= 10^4
 * - Each name consists of lowercase or uppercase letters
 */
