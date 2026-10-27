// Let's make the BankAccount class more secure by converting the balance to a private field."

// Your task:

// Add #balance at the top of the class
// Change this.balance to this.#balance in the constructor
// Change this.balance to this.#balance in all methods


export class BankAccount {
  // TODO: Add a private field called #balance
    #balance = 0;
 
  // TODO: Change this.balance to this.#balance
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }
  
  // TODO: Change this.balance to this.#balance in the getBalance() method
  getBalance() {
    return this.#balance;
  }
  
  // TODO: Change this.balance to this.#balance in the getAccountInfo() method
  getAccountInfo() {
    return `${this.accountHolder}: $${this.#balance}`;
  }
  
  // TODO: Change this.balance to this.#balance in the deposit(amount) method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}`);
    } else {
      console.log(`Invalid deposit amount`);
    }
  }
  
  // TODO: Change this.balance to this.#balance in the withdraw(amount) method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}`);
    } else {
      console.log(`Invalid withdrawal amount or insufficient funds`);
    }
  }
}