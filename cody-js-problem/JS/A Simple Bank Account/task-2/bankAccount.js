// Next, we add transaction functionality to your BankAccount class by implementing deposit() and withdraw() methods.

// Your task is to add these two new methods to the BankAccount class:

// 1. deposit(amount) method:

// Checks if the amount is positive (greater than 0)
// If valid:
// Adds the amount to the balance
// Logs exactly: Deposited $${amount}
// If invalid: Logs exactly: Invalid deposit amount
// 2. withdraw(amount) method:

// Checks if the amount is positive AND less than or equal to current balance
// If valid:
// Subtracts the amount from the balance
// Logs exactly: Withdrew $${amount}
// If invalid: Logs exactly: Invalid withdrawal amount or insufficient funds

export class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }
  
  getBalance() {
    return this.balance;
  }
  
  getAccountInfo() {
    return `${this.accountHolder}: $${this.balance}`;
  }
  
  // TODO: Add the deposit(amount) method
    deposit(amount){ 
  // TODO: The method should check if the amount is positive (greater than 0)
        if(amount > 0){ 
  // TODO: If valid: Adds the amount to the balance and logs: Deposited $${amount}, 
            this.balance += amount;
            console.log(`Deposited $${amount}`)
        }else{
  // otherwise logs: Invalid deposit amount
        console.log("Invalid deposit amount");
        }
    }


  // TODO: Add the withdraw(amount) method
    withdraw(amount){ 
  // TODO: The method should check if the amount is positive AND less than or equal to current balance
        if(amount > 0 && amount < this.balance){ 
  // TODO: If valid: Subtracts the amount from the balance and logs: Withdrew $${amount}, 
            this.balance -= amount;
            console.log(`Withdrew $${amount}`);
        } else{
  // otherwise logs: Invalid withdrawal amount or insufficient funds
         console.log("Invalid withdrawal amount or insufficient funds");
        }
    }

    
}