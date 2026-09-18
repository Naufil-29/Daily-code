import { GameCharacter } from './GameCharacter.js';

// Test code - don't modify
const warrior = new GameCharacter("Warrior");

warrior.takeDamage(30);
console.log(warrior.getStatus());  // Should output "Alive"

warrior.takeDamage(80);
console.log(warrior.getStatus());  // Should output "Defeated"