/**
 * 자바스크립트로 구현한 단일 연결 리스트 (Singly Linked List)
 * 이건 마치 열차 만들기와 비슷합니다.
 * 각 노드는 열차의 한 칸이고, 각 노드는 데이터와 다음 노드를 가르키는 포인터(손가락)로 구성됩니다.
 */
//1. 노드의 틀 만들기
// Node: 각 요소(데이터 + 다음 노드 주소)
class ListNode {
  constructor(value) {
    this.value = value; // 데이터 값. 무슨 값이든 무슨 타입이든 상관없습니다. 숫자일수도 있고. 엄청난 데이터일수도 있고.
    this.next = null; // 다음 노드를 가르키는 포인터. 혹은 메모리 주소! 손가락이라 보시면 되요.
  }
}

//2. 리스트 틀 만들기.
// Singly Linked List
class LinkedList {
  constructor() {
    this.head = null; // 첫 노드를 가르키는 포인터. 처음엔 비어있음.
  }

  // 1) 리스트 끝에 추가 (append)
  append(value) {
    // 새 노드를 하나 생성합니다.
    const newNode = new ListNode(value); //💥newNode = 새노드

    if (this.head === null) {
      // 헤드가 비어있다? 그러면 안되니 head가 새 노드를 가르키도록 함.
      this.head = newNode;
      return;
    }

    let current = this.head; ////💥current = 현재노드 (this.head 와 current는 모두 값을 가르키는 포인터이다. 왜 주소종이 들고있는 애. 값은 아래콘솔에 넣었던 숫자고)
    while (current.next) {
      //console.log(node1.next.next.value) 이거 예제처럼 타고 타고 타고 들어가 맨 끝을 가르키게 만든다.
      // 헤드가 있다? 그럼 헤드가 가르키는 노드가 가르키는 노드가... 가르키는 쭉 쭉.. 맨 뒤로...가서!
      current = current.next;
    }
    //current 맨 마지막 녀석을 가르친다.
    current.next = newNode; // 마지막 노드에 새 노드를 연결! 이건 마치 열차..
  }

  // 2) 리스트 앞에 추가 (prepend)
  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head; // 기존 head를 뒤로
    this.head = newNode;
  }

  // 3) 특정 값 찾기 (find)
  find(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  // 4) 특정 값으로 노드 삭제 (delete)
  delete(value) {
    if (this.head === null) return;

    // head 삭제해야 할 경우
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next; // 연결 건너뛰기. 즉, 중간 열차 칸을 떼어내는 것과 같음.
        return;
      }
      current = current.next;
    }
  }

  // 리스트 전체 출력 (디버깅용)
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// 테스트 코드
const list = new LinkedList();

console.log("---- Append Test ----");
list.append(1);
list.append(2);
list.append(3);
list.print(); // 1 -> 2 -> 3 -> null

console.log("---- Prepend Test ----");
list.prepend(0);
list.print(); // 0 -> 1 -> 2 -> 3 -> null

console.log("---- Find Test ----");
console.log(list.find(2)); // ListNode { value: 2, next: ListNode }

console.log("---- Delete Test ----");
list.delete(1);
list.print(); // 0 -> 2 -> 3 -> null

list.delete(0);
list.print(); // 2 -> 3 -> null
