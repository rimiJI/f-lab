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
    // TODO
    this.init = initialBalance; //초기값
    this.currentA = this.init; //현재금액.바뀌는 값을 기억할 것
  }

  deposit(amount) {
    // TODO
    this.currentA += amount;
    return this.currentA;
  }

  withdraw(amount) {
    // TODO (check balance first)
    this.currentA -= amount;
    return this.currentA;
  }

  getBalance() {
    // TODO
    return this.currentA;
  }
}
const account = new BankAccount(100);
account.deposit(50); // balance = 150
account.withdraw(30); // balance = 120
console.log(account.getBalance()); // 120
