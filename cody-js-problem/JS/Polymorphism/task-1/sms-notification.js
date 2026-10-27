import { Notification } from './notification-base.js';

// SMSNotification class that extends Notification
export class SMSNotification extends Notification {
  // TODO: Add the send(message) method that returns the string: "Sending '(message)' via SMS"
  send(message) { 
    return `Sending '${message}' via SMS`;
  }
}