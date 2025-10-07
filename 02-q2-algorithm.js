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
  // let count = 0; //이렇게하니깐 -1만 출력

  //Map으로 만들기
  for (let i = 0; i < s.length; i++) {
    let ch = s[i]; //키
    //만약 문자가 있으면 그값 + 1하고
    if (sMap.has(ch)) {
      sMap.set(/*키*/ ch, /*값*/ sMap.get(ch) + 1); //map.get(키)을 하면 값value를 가져올 수 있음
    }
    //없으면 count를 1로
    else {
      sMap.set(ch, 1);
    }
  }

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
이번엔 객체 Object로 풀어보기
1. for loop로 문자열 객체로 전환, (식별자->알파벳:값->횟수)
2. for loop로 돌려서 
  만약 값이 1이라면 그 값이 처음문자열에서 쓰인 인덱스넘버 출력
  for loop이 모두 끝난 뒤 -1출력
  */
/* function uniqueChaIndex2(s) {
  let obj = {};
  //값만필요하므로
  for (v of s) {
    //그 키가 있으면 -기존값에서 +1 , 없으면 1 //{ a: 3, p: 2, l: 1, e: 1 }
    obj[v] = v in obj ? obj[v] + 1 : 1;
  }
  for (let k in obj) {
    if (obj[k] === 1) {
      // 스트링에서 k의 순서(인덱스넘버) 구하기
    }
  }
  return -1;
}
console.log(uniqueChaIndex2(a)); */

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
