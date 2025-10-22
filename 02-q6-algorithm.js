/*
🍀Q6. 친구 네트워크 찾기 ( ... 진행상황: 4/6 )
1.[a,b] 모두 순회를 하며 - 각각 map으로 추가 {a : b, b : a}
2.map을 순회하며 - 값 부분을 Set으로 만들기....공간복잡도가 많이 나오겠구먼.
3.map을 반환

필요공간: map


*/
let a = [
  ["A", "B"],
  ["B", "C"],
  ["A", "D"],
];

function pairsMapSet(arr) {
  let arrMap = new Map(); //{:,:,:}

  //인덱스 조작이 아닌, [a,b]값자체가 중요하므로 for of
  for (let [i, j] of arr) {
    //(1) i가 없으면 map.set() 추가
    if (!arrMap.has(i)) {
      //값을 Set 배열형식으로 만들고
      arrMap.set(i, new Set());
      //값에 추가 add (Set형식이니까) <->배열은 push
      arrMap.get(i).add(j);
    }
    //있으면 값 Set에 추가만
    else {
      arrMap.get(i).add(j);
    }

    //(2) j가 없으면 map.set()에 추가
    if (!arrMap.has(j)) {
      arrMap.set(j, new Set());
      arrMap.get(j).add(i);
    } //j있으면 값 Set에 추가만
    else {
      arrMap.get(j).add(i);
    }
  }

  return arrMap;
}
console.log(pairsMapSet(a));

/*
시간복잡도: O(2n) forloop나란히 두개
공간복잡도: O(n ~ n²) map안에 중복없는 set이 있는 구조. 값모음인 Set에 꼭 n만큼 각 각 증가하는 것이 아니고, 짝에 해당하는 것만 몇개-그것도 중복 제거 한 공간복잡도를 가지므로 O(n ~ n²)이렇게 사이값을 적어두었다.
*/
/**
 * Friendship Network
 *
 * You are given a list of friendship pairs (arrays of two names).
 * Build and return a Map where each person maps to a Set of their friends.
 *
 * Example:
 * Input: pairs = [["A","B"],["B","C"],["A","D"]]
 * Output:
 * Map {
 *   "A" => Set(["B","D"]),
 *   "B" => Set(["A","C"]),
 *   "C" => Set(["B"]),
 *   "D" => Set(["A"])
 * }
 *
 * Constraints:
 * - 1 <= pairs.length <= 10^4
 */

// 보면 if statement가 반복되는 느낌이에요.
// 혹시 DRY 하게 할순 없을까요?
/* 
이전 작성 코드에 (1), (2)에 i,j값만 바뀌어 있다.
그렇다면
값이 없는지? 있는지? 확인하여 없으면 set으로 초기화하여 추가, 있으면
(a,b값을 교체하여도 작동되게끔 )
보조수단함수로 따로 빼서 만들기. - 이 함수를 메인 함수 안에 둘 것인지? 바깥에 둘 것인지? 고민 중

그 다음 원래 썼던 대로
for (let [i, j] of arr) 를 돌려서
보조수단함수(i,j)
보조수단함수(j,i)
실행시킨 후
회전이 끝나면
잘 정리된 map(key, value가 set() )을 반환 
*/

/*function 값있니없니(){
    만약 값이 있으면 
      arrMap.set(i, 겟으로가져온뒤더해줌j)
    만약 값이 없으면 
      arrMap.set(i,셋객체생성후).add로더해주기
    return arrMap
  }

  for of로 돌리기{
    값있니없니(i,j)
    값있니없니(i,j) 
    }return arrMap
   */

function pairsMapSet2(arr) {
  let arrMap = new Map(); //전역아님,(외부)변수

  //클로저함수 (내부)
  function askAddKeyValue(k, v) {
    //원래라면 function askAddKeyValue(map,k, v)
    // 이렇게 썼겠지만 클로저로 인하여
    if (!arrMap.has(k)) {
      arrMap.set(k, new Set());
    }
    arrMap.get(k).add(v);
    return arrMap;
  }

  for (let [i, j] of arr) {
    //원래라면 askAddKeyValue(arrMap, i, j);
    // 이렇게 썼겠지만 클로저로 인하여
    askAddKeyValue(i, j);
    askAddKeyValue(j, i);
  }
  return arrMap;
}
console.log(pairsMapSet2(a));
