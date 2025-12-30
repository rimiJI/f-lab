/**
 * Find K-th Node From End
 *
 * 뒤에서 k번째 노드를 반환하시면 되요.
 * 예를 들어, 1 -> 2 -> 3 -> 4 -> 5 라는 연결 리스트가 있을 때,
 * k가 2라면 뒤에서 두번째 노드인 4를 반환하면 됩니다.
 *
 * 이 문제도 두 개의 포인터를 사용해서 해결할 수 있습니다.
 * 하나의 포인터는 fast로, 다른 하나는 slow로 부릅니다.
 * 먼저, fast 포인터를 k칸 앞으로 이동시킵니다.
 * 그 다음, fast와 slow 포인터를 같이 이동시킵니다.
 * fast 포인터가 null에 도달할 때, slow 포인터는 뒤에서 k번째 노드를 가리키게 됩니다.
 *
 * 참고: https://www.youtube.com/watch?v=J0nIkuaf8R4
 *
 */
/* 
기존에 내가 풀었던 방식은
구현에 실수 (head를 끝까지 밀어버린뒤, k처리)가 자주 나와서
감정이 생길 수 있다. 

기존에 풀었던 방식과 다르게
slow
fast
를 사용해서 풀어보자
 */
/* 
fast를 먼저 k만큼가고
slow를 는 fast가 k만큼이동한뒤 k만큼의 간격을 유지하면서, k가 끝에 다다랐을때 본인의 위치,값을 나타냄
fast는 맨 끝에가있고, slow는 끝에서 k번째에 위치한다. 
*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 도우미 함수
function printList(head) {
  const res = [];
  while (head) {
    res.push(head.value);
    head = head.next;
  }
  console.log(res.join(" -> "));
}

function findKthFromEnd(head, k) {
  // TODO
  let slow = head;
  let fast = head;

  //fast는 k만큼 먼저 간다.
  for (let i = 0; i < k; i++) {
    // k가 길이보다 큰 잘못된 경우를 잡아줘야. 엉뚱하게 없는 fast.next에 접근하여 에러일으키지 않고, null로 return
    if (fast === null) return null;
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

// 1 -> 2 -> 3 -> 4 -> 5
const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

console.log(findKthFromEnd(head, 1).value); // 5
console.log(findKthFromEnd(head, 2).value); // 4
console.log(findKthFromEnd(head, 3).value); // 3
console.log(findKthFromEnd(head, 5).value); // 1
console.log(findKthFromEnd(head, 6)); // null
