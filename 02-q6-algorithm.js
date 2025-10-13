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
