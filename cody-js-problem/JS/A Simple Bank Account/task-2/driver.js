import { BankAccount } from './bankAccount.js';

// Test the implementation
const testAccount = new BankAccount('Alex Johnson', 500);

console.log('Initial state:');
console.log(testAccount.getAccountInfo()); // "Alex Johnson: $500"

testAccount.deposit(200);  // Logs: "Deposited $200"
console.log('New balance:', testAccount.getBalance()); // 700

testAccount.deposit(-50);  // Logs: "Invalid deposit amount"
console.log('Balance unchanged:', testAccount.getBalance()); // 600

testAccount.withdraw(100); // Logs: "Withdrew $100"
console.log('New balance:', testAccount.getBalance()); // 600

testAccount.withdraw(800); // Logs: "Invalid withdrawal amount or insufficient funds"
console.log('Balance unchanged:', testAccount.getBalance()); // 600




