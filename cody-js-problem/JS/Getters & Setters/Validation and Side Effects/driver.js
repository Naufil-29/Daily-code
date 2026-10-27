import { BankAccount } from './account.js';

// Test cases
const account = new BankAccount("Savings");

// Test 1: Valid balance
account.balance = 100;
console.log(account.balance);

// Test 2: Invalid balance (negative)
account.balance = -50;
console.log(account.balance);

// Test 3: Invalid balance (not a number)
account.balance = "abc";
console.log(account.balance);

