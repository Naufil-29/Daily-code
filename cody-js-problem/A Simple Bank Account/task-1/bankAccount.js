// In this project we will create a BankAccount class from scratch to manage a customer's bank account.

// Your first task is to create a class named BankAccount with:

// Constructor that takes two parameters:
// accountHolder (string): The name of the account owner
// initialBalance (number, optional): Starting balance (defaults to 0)
// Method getBalance() which:
// Returns the current account balance
// No parameters needed
// Method getAccountInfo() that:
// Returns a formatted string: "${accountHolder}: $${balance}"
// Example: If accountHolder is "John" and balance is 500, returns "John: $500"

// TODO: Create a class named BankAccount
class BankAccount { 
    accountHolder = '';
    initialBalance = 0;
// TODO: Add a constructor that takes two parameters: accountHolder and initialBalance (defaults to 0)
    constructor(accountHolder, initialBalance){ 
        this.accountHolder = accountHolder;
        this.initialBalance = initialBalance;
    }

// TODO: Add a method getBalance() that returns the current account balance
    getBalance(){ 
        
        return this.initialBalance;
    }

// TODO: Add a method getAccountInfo() that returns a formatted string: "${accountHolder}: $${balance}"
    getAccountInfo() { 
        return `${this.accountHolder}` + ': $' + `${this.initialBalance}`
    }
}




// Test
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"
console.log('Balance:', testAccount.getBalance()); // 500