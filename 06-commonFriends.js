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

3-2.set으로 풀기 - 중복방지
-setA, setB , 결과배열, 을 만들고 
-setA 값을 순회하면서 
-	만약 setB에 있다면(.has) 
-	결과배열에 추가하여라
순회가 다 끝나면
-정렬한 뒤 
-결과배열반환
*/
// 3-1.forloop로 풀기[존댓말]
//시간복잡도:O(n³) nested for loop + includes
//공간복잡도:O(n) 배열 하나 생성
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
// console.log(commonFriends(listA, listB));

// 3-1.forloop로 풀기[반말]
//시간복잡도:O(n³) nested for loop + includes
//공간복잡도:O(n) 배열 하나 생성
function commonFriends2(a, b) {
  let bothAscending = [];
  for (let v1 of a) {
    for (let v2 of b) {
      v1 === v2 && !bothAscending.includes(v1) ? bothAscending.push(v1) : null;
    }
  }
  return bothAscending;
}
// console.log(commonFriends2(listA, listB));

// 3-2.set으로 풀기
//시간복잡도:O(2n) for..of 하나, sort() 하나
//공간복잡도:O(3n) 배열 1개 ,set 2개
function commonFriends3(a, b) {
  let bothAscending = [];
  let setA = new Set(a);
  let setB = new Set(b);
  /* 일반 배열 처럼 for (let i=0;i<a.length;i++) 사용 불가
1) Set에는 .length 속성이 없다.(대신 .size를 사용) 
2) Set은 배열처럼 인덱스 요소로 접근 불가. 순서가 없는 데이터 모음 */
  for (v1 of setA) {
    if (setB.has(v1)) {
      bothAscending.push(v1);
    }
  }
  return bothAscending.sort();
}
// console.log(commonFriends3(listA, listB));

/* 
🤔3-3.시간 복잡도 비슷하게 유지하면서 공간을 덜 잡아먹게 하는 방법은 없을까요?
forloop a의 값하나씩 돌아가면서 ......
B을 set으로 만든 뒤(중복없는 값) a의 그 값이 있나요?
있으면 setB에서 제거하기 , 남길 인덱스 1개씩 추가
a.splice로 자른새배열(시간O(n),공간O(n))
     or a.slice로자른새배열 (시간O(자른만큼),공간O(자른만큼))
     or length값설정해서 길이줄이기 (시간O(1),공간(1))
정렬한 뒤 반환 
*/
//시간복잡도: O(2n) forloop 하나, sort 하나
//공간복잡도: O(n)  setB 하나
let listC = ["carl", "bob", "amy", "bob"];
let listD = ["bob", "bob", "bob", "dana", "carl", "carl"];

function commonFriends4(a, b) {
  let setB = new Set(b); //+ 공간 O(n)
  let index = 0;
  for (let i = 0; i < a.length; i++) {
    //+ 시간 O(n)
    if (setB.has(a[i])) {
      //B에 있으면
      index += 1;
      setB.delete(a[i]);
    }
  }
  //길이 줄이고, 정렬하기
  a.length = index; //시간 O(1)
  a.sort(); //시간 O(n)
  return a;
}
console.log(commonFriends4(listC, listD));
/*

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
