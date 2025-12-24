/**
 * Reverse a Linked List
 * 
 * 자, 이번에는 단일 연결 리스트를 뒤집는 문제입니다.
 * 예를 들어, 1 -> 2 -> 3 -> 4 -> 5 라는 연결 리스트가 있다면,
 * 이를 5 -> 4 -> 3 -> 2 -> 1 로 뒤집어야 합니다.
 * 연결 리스트의 각 노드는 다음 노드를 가르키는 포인터를 가지고 있으니,
 * 포인터를 역방향으로 바꾸면 됩니다.
 * 
 * 참고:

https://www.youtube.com/watch?v=G0_I-ZF0S38

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

function reverseList(head) {
  // TODO
}

// 1 -> 2 -> 3 -> 4 -> 5
const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);

let newHead = reverseList(head);
printList(newHead); // 5 -> 4 -> 3 -> 2 -> 1

// 10 -> 20 -> 30
const m3 = new ListNode(30);
const m2 = new ListNode(20, m3);
const head2 = new ListNode(10, m2);

let newHead2 = reverseList(head2);
printList(newHead2); // 30 -> 20 -> 10
