/**
 * Linked List Cycle Detection
 *
 * 이번에는, 단일 연결 리스트에 사이클이 있는지 확인하는 문제입니다.
 * 예를 들어, 3 -> 2 -> 0 -> -4 라는 연결 리스트가 있다고 합시다.
 * 그리고 마지막 노드인 -4 가 두 번째 노드인 2 를 가리키고 있다면,
 * 이 연결 리스트에는 사이클이 있다고 할 수 있습니다.
 *
 * 사이클이 있는지 확인하려면, 두 개의 포인터를 사용합니다.
 * 하나는 천천히 움직이고(slow), 다른 하나는 빠르게 움직입니다(fast).
 * 만약 두 포인터가 만나게 된다면, 사이클이 존재하는 것입니다.
 * 만약 fast 포인터가 null 에 도달한다면, 사이클이 없는 것입니다.
 *
 * 참고: https://www.youtube.com/watch?v=gBTe7lFR3vc
 *
 * 시간복잡도: O()
 * 공간복잡도: O()
 *
 * 쭉 돌리면서 그걸 새 공간에 넣고 만약 중간에 앞으로 추가되는 로직이있으면 true
 * 그렇지 않고 loop를 빠져나오면 사이클이 없느 것이므로 false
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

function hasCycle(head) {
  // TODO
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// 사이클 있는 케이스1
const n4 = new ListNode(-4);
const n3 = new ListNode(0, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(3, n2);
n4.next = n2; // -4 → 2 로 연결 (cycle 발생) //3 2 0 -4 ...... 2 0 -4 2 0 -4 .... ∞
console.log(hasCycle(head)); // true

// 사이클 없는 케이스
const a3 = new ListNode(3);
const a2 = new ListNode(2, a3);
const a1 = new ListNode(1, a2);
console.log(hasCycle(a1)); // false //1 2 3 끝

// 사이클 있는 케이스2
const b2 = new ListNode(2);
const b1 = new ListNode(1, b2);
b2.next = b1; // 2 → 1 로 연결 (cycle 발생) // 1 2 1 2 1 2 ..... ∞
console.log(hasCycle(b1)); // true

// 빈 리스트
console.log(hasCycle(null)); // false

// 한 개 노드 (사이클 없음)
const singleNode = new ListNode(1);
console.log(hasCycle(singleNode)); // false
