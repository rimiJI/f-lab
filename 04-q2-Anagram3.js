/**
 * Anagram - Check Inclusion (Permutation in String)
 *
 * 자, 애너그램이 다시 돌아왔네요. 함수를 한번 만들어 보세요.
 * 문자열 s1과 s2가 주어졌을 때,
 * s2 안에 s1의 애너그램이 부분문자열로 존재하다? true,
 * 아니면 false를 반환하시면 되요.
 *
 * 즉, s2의 어떤 연속된 부분이 s1을 재배열한 것과 동일하면 true.
 *
 * 예를 들어:
 *  s1 = "ab", s2 = "eidbaooo" → true  ("ba" 포함)
 *  s1 = "ab", s2 = "eidboaoo" → false
 *
 * Input:
 *  - s1: string
 *  - s2: string
 * Output:
 *  - boolean
 *
 * ----------------------------
 * Example 1:
 *  Input: s1 = "ab", s2 = "eidbaooo"
 *  Output: true
 *
 * Example 2:
 *  Input: s1 = "ab", s2 = "eidboaoo"
 *  Output: false
 * ----------------------------
 *
 * Constraints (제한):
 *  1 <= s1.length, s2.length <= 10^4
 *  s1, s2는 모두 소문자 영어 알파벳으로 구성됨
 *  문자 중간중간 공백 없음
 */
두번째;

function checkInclusion(s1, s2) {
  // TODO
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda")); // true
console.log(checkInclusion("a", "ab")); // true
console.log(checkInclusion("abc", "ccccbbbbaaaa")); // false
