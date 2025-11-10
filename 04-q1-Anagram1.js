/**
 * Valid Anagram
 *
 * An anagram (애너그램) is a word formed by rearranging the letters of another word.
 *
 * 예를 들어...
 * "listen" → "silent"
 * 즉, l i s t e n 을 해체해서 다른 단어. s i l e n t 를 만들수 있고
 * "anagram" → "nagaram"
 * 요것도 마찬가지.
 *
 * 그래서, 함수를 한번 만들어 보세요. 두개의 문자열이 주어집니다. t 랑 s.
 * 만약 t로 s를 만들수 있다? true
 * 없다? false 반환 하시면 됩니다.
 *
 * ----------------------------
 * Example 1:
 * Input:  s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input:  s = "rat", t = "car"
 * Output: false
 * ----------------------------
 *
 * Constraints (제한):
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters. 즉, 모두 소문자
 * reverse(), sort() 등등 금지. 어차피 써봐야 O(n) 늘어납니다.
 */
/* 
HashMap 문제
방법1 _map 두개를 만들어서 비교해본다.
방법2 _map 하나를 만들어서 첫번째s는 요소 발견하면 +1 / 두번째t는 -1을 한다. 모든 칸이 0이면 true 
*/

/* 
방법1 _
map 2개만들기
s를 for of 로 돌아가면서 요소를 하나씩 넣는다. 
t를 for of 로 돌아가면서 요소를 하나씩 넣는다. 
sMap과 tMap이 같으면 true 아니면 false

Complexity
시간복잡도: O(3N) ,for문 3개
공간복잡도: O(2N) ,Map 2개
*/

/* function isAnagram(s, t) {
  const sMap = new Map();
  const tMap = new Map();
  for (let ch of s) {
    sMap.set(ch, (sMap.get(ch) || 0) + 1);
  }
  for (let ch of t) {
    tMap.set(ch, (tMap.get(ch) || 0) + 1);
  }
  for (let [k, v] of sMap) {
    if (v !== tMap.get(k)) {
      //get은 key로 value를 찾는다.
      return false;
    }
  }
  return true;
}
 */

/* 
방법2 _
map 하나 만들고
forloop로 s를 map에 set
forloop로 t를 돌면서 만약 그 글자가 없으면 바로 false하고 
                    있으면 set으로 값부분에 (get으로 값 불러와서) -1씩하고 
                    만약 각 value가 0이하가 나오면 바로 false 
그렇지 않다면 모두 0이므로 true

Complexity
시간복잡도: O(2N) , forloop 2개
공간복잡도: O(N) , map 하나
*/

function isAnagram(s, t) {
  // TODO
  const sMap = new Map();
  for (let v of s) {
    sMap.set(v, (sMap.get(v) || 0) + 1);
  }
  for (let v of t) {
    if (!sMap.has(v)) return false;
    sMap.set(v, sMap.get(v) - 1);
    if (sMap.get(v) < 0) return false;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello")); // false
console.log(isAnagram("aacc", "ccac")); // false
console.log(isAnagram("aa", "a")); // false
console.log(isAnagram("abcd", "dcba")); // true
