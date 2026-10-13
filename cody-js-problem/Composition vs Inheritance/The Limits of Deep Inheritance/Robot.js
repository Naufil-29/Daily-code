// Complete the Robot.js file to make the robot functional. Right now, the robot is built but can't do anything.

// What to do in Robot.js:

// Create the speaker and the mover components inside the Robot constructor
// Use the components in the methods:
// In greet(): Call this.speaker.speak("Hello!");
// In walkForward(): Call this.mover.move("forward");
// Why we do this: This is composition - the robot is built by combining smaller components. The robot has-a speaker (for talking) and has-a mover (for moving), rather than inheriting these abilities.

import { Speaker } from './Speaker.js';
import { Mover } from './Mover.js';

export class Robot {
  constructor(name) {
    this.name = name;
    
    this.speaker = new Speaker();
    this.mover = new Mover();
  }
  
  greet() {
    this.speaker.speak("Hello!");
  }
  
  walkForward() {
    this.mover.move("forward")
  }
}