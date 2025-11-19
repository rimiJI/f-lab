/**
 *  Group Anagrams
 *
 * 이번에도 애너그램이에요. 문자열 배열 words가 주어졌을 때,
 * 서로 애너그램인 단어들끼리 묶어서 그룹으로 반환하시면 되요.
 *
 * Input:
 *  - words: string[]
 * Output:
 *  - string[][] (애너그램 그룹들의 배열)
 *
 * ----------------------------
 * Example:
 *  Input: ["eat","tea","tan","ate","nat","bat"]
 *  Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 *  Input: [""]
 *  Output: [[""]]
 *
 *  Input: ["a"]
 *  Output: [["a"]]
 * ----------------------------
 *
 *  Constraints (제한):
 *  1 <= words.length <= 10^4
 *  0 <= words[i].length <= 100
 *  words[i]는 모두 소문자 영어 알파벳으로 구성
 */
/* 

안풀림
첫번째 에나그램문제를 활용해서 
그걸로 하나하나씩 돌아가면서 푼 뒤
최적화를 생각해보라





 */

function groupAnagrams(words) {
  for (let v of words) {
    let isAnagram = true;

    if()

    if(isAnagram) {
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
  }}
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""]));
// [[""]]
console.log(groupAnagrams(["a"]));
// [["a"]]
console.log(groupAnagrams(["abc", "bca", "cab", "abcd"]));
// [["abc","bca","cab"],["abcd"]]
console.log(groupAnagrams(["", "", "a", "a"]));
// [["",""],["a","a"]]
console.log(groupAnagrams(["ab", "ba", "abc", "cab", "bac", "a"]));
// [["ab","ba"],["abc","cab","bac"],["a"]]
