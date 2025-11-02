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

var isPalindrome = function (s) {
  // TODO
  const head = 0;
  const tail = s.lenght - 1;
  //하나씩 돌리다가
  for (let i = 0; i < s.lenght / 2; i++) {
    //만약 ' '를 발견하면 다음으로 넘어가라
    //만약 뒤에서 ''발견하면 다음으로 넘어가라
    //앞과 뒤가 다르면 바로 false
    //(앞과뒤가 같으면 ) 한칸씩 뒤앞으로
  } //회전이 종료되면 true
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a man a plan a canal panama")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("never odd or even")); // true
console.log(isPalindrome("hello world")); // false
