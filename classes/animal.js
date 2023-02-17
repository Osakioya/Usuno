class Animal {
    constructor(name) {
      this.name = name;
      this.level = 1;
      this.health = 100;
      this.hunger = 0;
      this.energy = 100;
    }
    drinks() {
      this.health += 5;
      console.log("Your pet is drinking... ( Health + 5)");
      return this;
    }
    eats() {
      this.health += 5;
      this.hunger -= 5;
      console.log("Your pet is eating... (Health + 5, Hunger - 5)");
      return this;
    }
    sleep() {
      this.energy += 5;
      console.log("Your pet is sleeping... (Energy + 5)");
      return this;
    }
    stats() {
      return console.table({
        name: this.name,
        health: this.health,
        energy: this.energy,
        hunger: this.hunger,
        level: this.level,
      });
    }
  }
  
  module.exports = { Animal };