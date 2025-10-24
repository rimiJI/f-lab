/*
Check Palindrome
뒤집어도 앞에서 읽을때와 같은가?

앞과 뒤를 가리키는 인덱스넘버가 들어있는 변수를 선언하고 
앞을 가르키는 pointer [0]
뒤를 가르키는 pointer [arr.length-1]
앞과 뒤가 같은가? 
같으면 
++ --씩하다가 
만약에 앞>뒤 이런 상황이 오면 멈추고
true를 반환하고
같지않으면 
바로 false 반환

제약조건:
문자열의 불변성 -인덱스넘버로 문자열을 조작해서 변경할 수 없다. 
*/
var isPalindrome = function (s) {
  let head = 0;
  let tail = s.length - 1;

  //또는 while (head < tail)
  for (let i = 0; i < s.length / 2; i++) {
    //만약 앞뒤가 다르다면 바로 false
    if (s[head] !== s[tail]) {
      return false;
    }
    //만약 앞과 뒤가 같다면 head++ ,tail--
    head++;
    tail--;
  }
  return true;
};

console.log(isPalindrome("racecar")); //true.
console.log(isPalindrome("hello")); //false.
console.log(isPalindrome("madam")); //true.
console.log(isPalindrome("a")); //true.
