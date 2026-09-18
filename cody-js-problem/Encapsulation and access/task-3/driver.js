import { MessageBox } from './messageBox.js';

// Using the message box
const box = new MessageBox();

console.log(box.setMessage("Hello"));    // "Message set!" (uses #isValidMessage)
console.log(box.setMessage(""));         // "Invalid message!" (uses #isValidMessage)
