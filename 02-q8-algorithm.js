/**
 * BankAccount
 *
 * Create a BankAccount class that stores a balance.
 *
 * Methods:
 *  - deposit(amount): add money
 *  - withdraw(amount): subtract money if balance is enough
 *  - getBalance(): return current balance
 *
 * Example:
 * const account = new BankAccount(100);
 * account.deposit(50);   // balance = 150
 * account.withdraw(30);  // balance = 120
 * console.log(account.getBalance()); // 120
 */
/*
Q8.은행 계좌
초기값을 받는 인스턴스 생성자 메서드,
매개변수⭕ 입금 메서드
매개변수⭕ 인출 메서드
매개변수❌ 잔액 반환 메서드
*/
class BankAccount {
  constructor(initialBalance) {
    if (initialBalance === undefined) initialBalance = 0;
    // TODO
    this.currentA = initialBalance; //현재금액.바뀌는 값을 기억할 것
  }

  deposit(amount) {
    // TODO
    if (amount <= 0) return this.currentA;
    this.currentA += amount;
    return this.currentA;
  }
  /* 
deposit 할땐, 주어진 값이 마이너스거나 0이면 무시하게끔 하는게 좋을거 같아요.
withdraw 할땐, balance보다 크면 안될거 같은데요.
*/
  withdraw(amount) {
    // TODO (check balance first)
    if (this.currentA < amount) return this.currentA;
    this.currentA -= amount;
    return this.currentA;
  }

  getBalance() {
    // TODO
    return this.currentA;
  }
}
const account = new BankAccount(100);
account.deposit(-50); // balance = 100 //0이하는 무시.
account.withdraw(30); // balance = 70
console.log(account.getBalance()); // 70

/*
this.init은 왜 선언하신거죠? 어디 쓸데가 없어보이는데..
그리고, initialBalance 초기값이 주어지지 않았을때를 handle하면 좋을거 같아요.
Error를 리턴하던가 아니면 초기값을 0으로 가던가.

초기값이 주어지지않는다면 0으로,
*/
