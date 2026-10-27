// You're given a MessageBox class that stores messages. Your task is to add a private method called #isValidMessage(text) that validates messages. It should:

// Return true if the text is not empty and less than 100 characters
// Return false otherwise

export class MessageBox {
  #message = "";

  setMessage(text) {
    if (this.#isValidMessage(text)) {
      this.#message = text;
      return "Message set!";
    }
    return "Invalid message!";
  }
  
  getMessage() {
    return this.#message;
  }
  
  // TODO:  Add a private method called #isValidMessage(text)
  #isValidMessage(text){ 
  // TODO: Make it return true if the text is not empty and less than 100 characters, otherwise return false
    if(text !== '' && text.length < 100){ 
      return true;
    }
    return false;

  }

  }
