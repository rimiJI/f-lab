/* Q7. 투두리스트

시작값을 받는 인스턴스 생성자 메서드 , 
1씩 생성, 1씩 감소, 비움 ⇒ 이렇게 매개변수없는 4가지 메서드가 있는 클래스를 만드시오.; */
/**
 * Counter
 *
 * Create a Counter class that starts from a given number.
 *
 * Methods:
 *  - increment(): increases the counter by 1 and returns it
 *  - decrement(): decreases the counter by 1 and returns it
 *  - reset(): resets the counter back to the initial value
 *
 * Example:
 * const counter = new Counter(10); //인스턴스생성
 * console.log(counter.increment()); // 11
 * console.log(counter.increment()); // 12
 * console.log(counter.decrement()); // 11
 * console.log(counter.reset());     // 10
 */

/*
🍀Q7. 투두리스트
초기값을 받아서
1씩 +, - , 비움 ⇒ 이렇게 인자가 1개, 메서드가 3개 있는 클래스를 만드시오.

- 변수 : 현재값 Current, 초기값Initial
변수는 let으로 쓰지 말고 this(나 자신)로 만들어서 객체의 property 만드는 것 

- this로: 현재값 Current, 초기값Initial
init은 지역변수가 아니므로 항시this.init으로 붙여줌
이유: 클래스 안밖에서도 모두 객체(인스턴스) 속성이므로. let,const가 아닌 
객체의 기억 상태 값이기 때문. 속성 접근 시 [그 객체 자신 this]로 !

-reset()에 그냥 this.init를 반환하면 안되는 이유:
그 뒤로도 this.currentV를 활용하여 
increment, decrement 실행할 수 있으므로 

*/

class Counter {
  constructor(initialValue) {
    // TODO: store the initial value
    //객체 처음 생성시 한번 실행
    //초기값 기억.
    this.initialValue = initialValue; //init => initialValue
    //현재값 기억.
    this.currentValue = this.initialValue; //curruentV => currentValue
  }

  increment() {
    // TODO: increase and return
    this.currentValue += 1;
    return this.currentValue;
  }

  decrement() {
    // TODO: decrease and return
    this.currentValue -= 1;
    return this.currentValue;
  }

  reset() {
    // TODO: reset to the initial value
    this.currentValue = this.initialValue;
    return this.initialValue;
  }
}

let counter1 = new Counter(10);
let counter2 = new Counter(0);

console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter1.decrement()); // 11
console.log(counter1.reset()); // 10
console.log(counter1.increment()); //11
console.log(counter2.increment()); //1

/*
변수 이름이 명확하지 않은거 같아요.
this.init 이라던가 this.currentV 라던가.
더 좋은 이름이 없을까요?*/
