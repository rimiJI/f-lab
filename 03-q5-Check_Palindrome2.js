/**
 * Check Palindrome2
 *
 * 팔린드롬은 이제 아시겠죠? 앞으로 읽어도 뒤로 읽어도 같은 단어나 문장.
 *
 * 문자열 's'가 주어지구요, 팔린드롬이면 true, 아니면 false.
 * 근데 이번엔 공백이 중간중간 있으니 Skip 해야겠죠?
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
 * Input:  s = "a man a plan a canal panama"
 * Output: true
 *
 * Example 4:
 * Input:  s = "never odd or even"
 * Output: true
 *
 * Example 5:
 * Input:  s = "hello world"
 * Output: false
 *
 * ----------------------------
 * Constraints (제한):
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters only (소문자 알파벳만 포함).
 * reverse() 나 sort() 같은거 쓰지 않기.
 */
/* 
시간복잡도: O(2n) ,for문 한 개. replace한 개
공간복잡도: O(1) ,s는 결국 하나의 string. 변수 하나가 추가된 것일 뿐.
*/

var isPalindrome = function (s) {
  // TODO
  let head = 0;
  let tail = s.length - 1;
  //공백제거
  s = s.replace(/\s+/g, "");
  //하나씩 돌리다가
  //또는 while(head<tail)
  for (let i = 0; i < s.length / 2; i++) {
    //앞과 뒤가 다르면 바로 false
    if (s[head] !== s[tail]) return false;
    //(앞과뒤가 같으면 ) 한칸씩 뒤앞으로
    head++;
    tail--;
  } //회전이 종료되면 true
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a man a plan a canal panama")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("never odd or even")); // true
console.log(isPalindrome("hello world")); // false
