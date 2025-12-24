/**
 * Find the Middle Node of a Linked List
 *
 * 만약 연결 리스트의 길이가 짝수라면,
 * 두 개의 중간 노드 중 두 번째 노드를 반환합니다.
 * 예를 들어, 1 -> 2 -> 3 -> 4 -> 5 -> 6 라는 연결 리스트가 있으면,
 * 중간 노드는 4가 됩니다.
 *
 * 만약 연결 리스트의 길이가 홀수라면,
 * 정확히 하나의 중간 노드가 존재합니다.
 * 예를 들어, 1 -> 2 -> 3 -> 4 -> 5 라는 연결 리스트가 있으면,
 * 중간 노드는 3이 됩니다.
 *
 * 만약 연결 리스트가 비어있다면, null을 반환합니다.
 *
 * 이 문제도 마찬가지로 두 개의 포인터를 사용해서 해결할 수 있어요.
 * 하나의 포인터는 slow로, 다른 하나는 fast로 부릅니다.
 * slow 포인터는 한 칸씩 이동하고, fast 포인터는 두 칸씩 이동합니다.
 *
 * 화이팅 입니다!
 *
 * 참고: https://www.youtube.com/watch?v=A2_ldqM4QcY
 *
 *
 *
 * Pseudo code
 * slow는 한번씩 이동하도록
 * fast를 껑충껑충 이동하게 만들고
 *
 * 시간복잡도: O(n) , 주어진 리스트만큼 회전.
 * 공간복잡도: O(1) , 스칼라 변수 두개 선언
 */

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  // fast는 2칸, slow는 1칸씩 이동
  //널인지 아닌지 확인.즉, 끝까지 도달했는지
  while (fast && fast.next) {
    //slow는 1만큼이동
    slow = slow.next;
    //fast는 X2만큼 이동
    fast = fast.next.next;
  } //끝까지 이동했을때 slaw는 fast/2만큼 이동 했을 것.
  return slow; // slow가 middle node
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
const n6 = new ListNode(6);
const n5 = new ListNode(5, n6);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);
const middle = findMiddle(head);
console.log(middle.value); // 4

// 1 -> 2 -> 3 -> 4 -> 5
const m5 = new ListNode(5);
const m4 = new ListNode(4, m5);
const m3 = new ListNode(3, m4);
const m2 = new ListNode(2, m3);
const head2 = new ListNode(1, m2);
const middle2 = findMiddle(head2);
console.log(middle2.value); // 3

// 빈 리스트
const middle3 = findMiddle(null);
console.log(middle3); // null
