const { Animal } = require("./animal");

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  playBall() {
    this.hunger += 5;
    this.level += 0.5;
    this.energy -= 5;
    console.log(
      "Your pet is playing with a bal... (Hunger and Energy + 5, Level +0.5)"
    );
    return this;
  }
  learnNewCommand() {
    this.energy -= 10;
    this.level += 2;
    this.hunger += 25;
    console.log("Your pet is learned a new command (Energy -10, Level +2)");
    return this;
  }
}
module.exports = { Dog };