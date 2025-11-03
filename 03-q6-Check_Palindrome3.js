/**
 * Check Palindrome3
 * 
 * 팔린드롬은 이제 정말 잘 아시겠죠? 앞으로 읽어도 뒤로 읽어도 같은 단어나 문장.
 * 
 * 문자열 's'가 주어지구요, 팔린드롬이면 true, 아니면 false.
 * 
 * 근데, 엄청난 능력이 뚝딱 생겨서, 딱 하나의 캐릭터를 지울수 있어요! 
 * 하나의 캐릭터를 지웠을때 팔린드롬이다. 그럼 true.
 * 대신 이번엔 중간 중간 공백은 없어요.
 * 
 * Example 1:
 * Input:  s = "racecar"
 * Output: true
 *
 * Example 2:
 * Input:  s = "hello"
 * Output: false
 *
 * Example 3:
 * Input:  s = "abca"
 * Output: true
 * Explanation: Remove 'b' → "aca" is a palindrome.
 *
 * Example 4:
 * Input:  s = "deeee"
 * Output: true
 * Explanation: Remove 'd' → "eeee" is a palindrome.
 * 
 * ----------------------------
 * Constraints (제한):
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters only (소문자 알파벳만 포함).
 * reverse() 나 sort() 같은거 쓰지 않기.
 */

var isPalindrome = function(s) {
  // TODO
while(){
    
}
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("abca")); // true
console.log(isPalindrome("deeee")); // false