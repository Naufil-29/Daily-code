// You're given a BankAccount class with a basic setter. Your task is to complete the balance setter.

// Add to the setter:

// Validation: Check if value is not a number OR is less than 0 - if so, console.log("Invalid balance") and use return to exit the setter
// Side Effect: After storing a valid value, console.log(\`Balance updated to $${value}\`)


export class BankAccount {
  constructor(accountName) {
    this._balance = 0;
    this._accountName = accountName;
  }
  
  get balance() {
    return this._balance;
  }
  
  set balance(value) {
    // TODO: Validation: Check if value is not a number OR is less than 0 - if so, console.log("Invalid balance")
    if(typeof value !== 'number' || value < 0){ 
        console.log("Invalid balance");
        return;
    }
    // TODO: Use return to exit the setter
    this._balance = value;
    
    // TODO: Log \`Balance updated to $${value}\`
    console.log(`Balance updated to $${value}`);
  }
  }