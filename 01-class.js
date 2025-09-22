// 250920

// Input: [1, 2, 3, 4, 5, 6]
// // Output: 12
let a = [1, 2, 3, 4, 5, 6];

function sumEvenNumbers(arr) {
  let evensum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a[i] % 2 == 0) evensum += a[i];
  }
  return evensum;
}
console.log(sumEvenNumbers(a));

//틀린거1: i=0 초기값설정을 안했음
//틀린거2: index인 i 값을 더해버림. a[i]를 더해야함
//고친거1: evensum을 함수 내 지역변수로 바꿔줌
//고친거2: 변수 남발을 줄여 arr.length을 반복문 내에 직접 적어줌
