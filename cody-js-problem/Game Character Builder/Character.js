// This is a simple game character system where characters can equip weapons and engage in combat.

// Your task is to add these two methods to the Character class:

// Method 1: takeDamage(amount)

// This method reduces the character's health by the amount
// Logs: ${this.name} takes ${amount} damage
// Method 2: equipWeapon(weapon)

// This method gives the character a weapon (composition: "has-a" relationship)
// Logs: ${this.name} equipped ${weapon.name}


export class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapon = null; // Composition: Character can have a weapon
  }
  
    takeDamage(amount){ 
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage`);
    }

    equipWeapon(weapon){ 
        this.weapon = weapon;
        console.log(`${this.name} equipped ${weapon.name}`);
    }
  
  
  attack() {
    if (this.weapon) {
      console.log(`${this.name} attacks with ${this.weapon.name} for ${this.weapon.damage} damage`);
    } else {
      console.log(`${this.name} punches for 5 damage`);
    }
  }
}