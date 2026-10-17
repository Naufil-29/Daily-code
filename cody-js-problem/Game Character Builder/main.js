import { Character } from './Character.js';
import { Weapon } from './Weapon.js';

const hero = new Character('Knight');
const sword = new Weapon('Sword', 10);

hero.equipWeapon(sword); // Should log: "Knight equipped Sword"
hero.takeDamage(20);     // Should log: "Knight takes 20 damage"
console.log(hero.health); 