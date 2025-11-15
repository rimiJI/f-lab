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
방법1_ for로 요소 하나씩 회전하면서 _ 그 하나씩을 Map으로 저장한뒤, Map에 넣고 (2중 맵)
tempMap을 만들고 그 요소가 위에 만든 2중 맵에 있으면 맵말고 원본 array요소를 추가 

안풀림
첫번째 에나그램문제를 활용해서 
그걸로 하나하나씩 돌아가면서 푼 뒤]
최적화를 생각해보라


 */

function groupAnagrams(words) {
  // TODO
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
