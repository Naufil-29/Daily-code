import { Notification } from './notification-base.js';

// EmailNotification class that extends Notification
export class EmailNotification extends Notification {
  // TODO: Add the send(message) method that returns the string: "Sending '(message)' via Email"
  send(message) { 
    return `Sending '${message}' via Email`;
  }
}