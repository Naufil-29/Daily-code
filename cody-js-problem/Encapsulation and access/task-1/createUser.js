// You're given code that uses encapsulation to protect user data. Your task is to add a getAge() method to access the age.

// Tests will check:

// getAge() method exists
// It returns the correct age
// The age info remains private
// Expected Output:

// john_doe

// 25



export function createUser(username, age) {
  // Private data - cannot be accessed directly
  let privateUsername = username;
  let privateAge = age;
  
  // Public methods to interact with private data
  return {
    getUsername: function() {
      return privateUsername;
    },
  
    // TODO: Add the getAge() method that returns the correct age and the age info remains private
    getAge: function() { 
      return privateAge;
    }
    
  };
}
