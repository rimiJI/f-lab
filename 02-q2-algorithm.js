/**
You are building a chat app.
When a chat message is stored as a string, 
you need to find the first character that appears only once. 
Return the index of that character. 
If no such character exists, return -1.

Example1:
Input: "applebanana"
Output: 3

Example2:
Input: "racecar"
Output: 2

Example3:
Input: "aabbcc"
Output: -1
 *
 */

/* 
한번만 등장하는 첫번째 문자를 찾고 
그 문자의 인덱스 넘버를 반환하시오.
만약 한번만 등장하는 게 없으면 -1 반환하라. 
*/

/* 
for loop로 한번씩 돌리면서
    map으로 횟수를 센다

for loop로 map을 보면서
    만약 횟수가 1인 값이 있다면 
        그 값의 arr 인덱스 넘버를 리턴하고
    없다면 -1를 리턴하라
  */

let a = "aaapple";
function uniqueChaIndex(s) {
  let sMap = new Map();

  //Map으로 만들기
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1); //만약값이 있다면 기존횟수+1 없다면 0
  } //??는 nullish문법으로 앞??뒤 → 앞값이 참이면 그 값을, null이면 뒤값을

  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(uniqueChaIndex(a));

//-------------------------------------
/* 
let obj = { a: 1, b: 2, c: 3 };
console.log(obj);
// 👉 { a: 1, b: 2, c: 3 }

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(map);
 */
