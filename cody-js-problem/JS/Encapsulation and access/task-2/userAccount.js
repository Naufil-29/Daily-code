export class UserAccount {
  // TODO: Add a public field username
  username = '';
  #password = '';
  // TODO: Add a private field #password
  // TODO: Add a constructor that takes username and password parameters and sets them as properties
  constructor(username, password){ 
  this.username = username;
  this.#password = password;
  }
}