/**
 * Delete a middle Node in a Linked List
 *
 * 단일 연결 리스트에서 "삭제할 노드"에만 접근할 수 있을 때,
 * 그 노드만 싹- 삭제하세요.
 *
 * 조건:
 * head에 대한 포인터는 주어지지 않습니다.
 * 삭제할 노드는 리스트의 마지막 노드(tail)가 아닙니다.
 * 리스트에는 중복 값이 있을 수 있습니다.
 *
 * Example1:
 *  Input:  4 -> 5 -> 1 -> 9,  node = (값이 5인 노드)
 *  Output: 4 -> 1 -> 9
 *
 * Example2:
 *  Input:  8 -> 4 -> 2 -> 6,  node = (값이 2인 노드)
 *  Output: 8 -> 4 -> 6
 *
 * 참고: https://www.youtube.com/watch?v=KwuUaLmu8wg
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

function deleteNode(node) {
  // TODO
  //node를 다음 노드로 바꾸기
  node.value = node.next.value;
  //이제 다음 값으로 바꿔줬으니 그 해당 노드의 next가 다다음으로 가르키도록
  node.next = node.next.next;
}

// 4 -> 5 -> 1 -> 9
const n4 = new ListNode(9);
const n3 = new ListNode(1, n4);
const n2 = new ListNode(5, n3);
const head = new ListNode(4, n2);
deleteNode(n2);
printList(head); // 4 -> 1 -> 9

// 8 -> 4 -> 2 -> 6
const m4 = new ListNode(6);
const m3 = new ListNode(2, m4);
const m2 = new ListNode(4, m3);
const head2 = new ListNode(8, m2);
deleteNode(m3);
printList(head2); // 8 -> 4 -> 6
