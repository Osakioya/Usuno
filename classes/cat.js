const { Animal } = require("./animal");

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  spoilSomething() {
    this.power -= 10;
    this.level += 1;
    console.log("Your pet messed something up ( Energy -5, Level +1)");
    return this;
  }
}

module.exports = { Cat };