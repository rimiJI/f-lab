/**
 * Remove Duplicates from a Sorted Linked List
 *
 * 자, 정렬된 단일 연결 리스트에서 중복된 값을 제거하는 문제입니다.
 * 예를 들어, 1 -> 1 -> 2 -> 3 -> 3 이라는 연결 리스트가 있다면,
 * 중복된 1과 3을 제거해서 1 -> 2 -> 3 으로 만들어야 합니다.
 * 연결 리스트의 각 노드는 다음 노드를 가르키는 포인터를 가지고 있으니,
 * 중복된 노드를 건너뛰도록 포인터를 조정하면 됩니다.
 *
 * 참고: https://www.youtube.com/watch?v=AkLhT1FOJNQ
 */

//--//현재값이 있으면
//------//다음 값을 가르키는 r이 있는가?
//------//있는데 만약 현재값과 다음에 위치하는 값이 같으면??
//--------//건너뛰기 ( 다다음값을 다음 값에 넣기.)
//------//안같으면
//--------//그냥 다음값을 넣기
/* 
시간복잡도: O(n²) 매번 이중으로 List를 끝까지 순회함.
공간복잡도: O(1) 스칼라값 하나인 변수만을 추가로 사용 */

class ListNode {
  //노드 생성자 new ListNode(값, 다음위치인 변수)
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 도우미 함수
function printList(head) {
  const res = [];
  //head가 있으면 res리스트에 값을 추가하고
  //다음순서를 head에 넣어라
  while (head) {
    res.push(head.value);
    head = head.next;
  } //res를 ->이 형식으로 출력하라.
  console.log(res.join(" -> "));
}

function deleteDuplicates(head) {
  // TODO
  //현재값
  let current = head;

  while (current) {
    let runner = current; //2. r포인터
    //3.r포인터의 다음 노드가 존재할때까지
    while (runner.next) {
      //4.실제로직,현재값과 다음값이 같으면
      if (current.value === runner.next.value) {
        //다다음순서를 다음순서로 지정해라
        runner.next = runner.next.next;
      } //같지않으면 그냥 다음순서로
      else {
        runner = runner.next;
      }
    }
    current = current.next; //1.한칸씩 이동
  }
  return head; //💥c와r은 끝에 위치해있기 때문에 처음 전달받은 head의 포인터는 변경되지 않음. 그래서 헤드를 리턴해주는 것임 ( 이게 무슨말임 )
} //head는 처음 노드를 가리키는 “시작점” 레퍼런스

// 1 -> 1 -> 2 -> 3 -> 3
const n5 = new ListNode(3);
const n4 = new ListNode(3, n5);
const n3 = new ListNode(2, n4);
const n2 = new ListNode(1, n3);
const head = new ListNode(1, n2);
printList(deleteDuplicates(head)); // 1 -> 2 -> 3

// 1 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2
const m7 = new ListNode(2);
const m6 = new ListNode(2, m7);
const m5 = new ListNode(2, m6);
const m4 = new ListNode(1, m5);
const m3 = new ListNode(1, m4);
const m2 = new ListNode(1, m3);
const head2 = new ListNode(1, m2);
printList(deleteDuplicates(head2)); // 1 -> 2
