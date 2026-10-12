// You're given a UserProfile class with the username property already implemented. Your task is to complete the implementation for the email property using getters and setters:

// Add a getter for email that returns the current email value
// Add a setter for email that:
// Validates the email contains the '@' character
// If valid:
// Updates the email to the new value
// Logs exactly: Email updated to [newEmail]
// If invalid:
// Logs exactly: Invalid email!
// Does NOT update the email


export class UserProfile {
  constructor(username, email) {
    this._username = username;
    this._email = email;
  }
  
  // Username getter/setter (already complete)
  get username() {
    return this._username;
  }
  
  set username(newName) {
    if (newName.length < 3) {
      console.log("Username must be at least 3 characters!");
      return;
    }
    this._username = newName;
    console.log(`Username updated to ${newName}`);
  }
  
    get email(){ 
        return this._email;
    }

    set email(newEmail){ 
        if(newEmail.includes("@")){ 
            this._email = newEmail;
            console.log(`Email updated to ${newEmail}`);
            return;
        }

        console.log("Invalid email!")
    }
}