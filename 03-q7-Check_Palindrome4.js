/**
 * Check Palindrome4
 *
 * 또 팔린드롬이에요. 앞으로 읽어도 뒤로 읽어도 같은 단어나 문장.
 *
 * 문자열 's'가 주어지구요, 대신 재배열 해야 되요.
 *
 * 재배열해서 팔린드롬을 만들수 있다. true
 * 없다. false
 *
 * Example 1:
 * Input:  s = "civic"
 * Output: true
 *
 * Example 2:
 * Input:  s = "ivicc"
 * Output: true  ("civic" can be formed)
 *
 * Example 3:
 * Input:  s = "hello"
 * Output: false
 *
 * Example 4:
 * Input:  s = "aaaabbbb"
 * Output: true
 * Explanation: "abbaabba" 가능. (모두 짝수)
 *
 * Example 5:
 * Input:  s = "aabbcc"
 * Output: true
 * Explanation: 짝수 개 문자만 존재 → 어떤 조합으로든 팔린드롬 가능.
 *
 * Example 6:
 * Input:  s = "aabbccd"
 * Output: true
 * Explanation: d만 홀수(1개) → 가능 (중앙 문자로 배치).
 *
 * Example 7:
 * Input:  s = "aabbccdde"
 * Output: false
 * Explanation: 홀수 개 문자가 2개 이상 → 불가능.
 *
 * ----------------------------
 * Constraints (제한):
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters only (소문자 알파벳만 포함).
 * reverse() 나 sort() 같은거 쓰지 않기.
 */
/* 문자를 정렬해서 홀수개가 딱 하나만 나오면 괜찮음
나머지는 짝수여야함
map으로 풀어서 
있으면 +- 이렇게 상쇄

*/
var isPalindrome = function (s) {
  // TODO
  //문자 하나씩 돌리면서 map에 set하고
  let freqMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let preValue = freqMap.get(s[i]) || 0;
    freqMap.set(s[i], preValue + 1);
  }

  //odd가 하나일 경우 true
  let odd = 0;
  for (let [k, v] of freqMap) {
    //짝수가 아니면 odd에 추가
    if (v % 2 !== 0) odd++;
    if (odd > 1) return false;
  } //짝수면 탈출
  return true;
};

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("ivicc")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("aabbccdde")); // false
