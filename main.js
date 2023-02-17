const { Dog } = require("./classes/dog");
const { Cat } = require("./classes/cat");
const { Animal } = require("./classes/animal");
const inquirer = require("inquirer");

let myPet;
let indicator = true;

const game = async () => {
  const { nameOfPet } = await inquirer.prompt({
    type: "input",
    name: "nameOfPet",
    message: "Please name your pet",
  });
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "Please choose your pet",
    choices: ["dog", "cat"],
  });
  if (typeOfPet == "dog") {
    myPet = new Dog(nameOfPet);
    console.log(myPet.stats());
  } else {
    const myPet = new Cat(nameOfPet);
    console.log(myPet.stats());
  }
  console.log(`Your pet name is ${nameOfPet} and it's ${typeOfPet}`);

  while (indicator == true) {
    if (typeOfPet === "dog") {
      const { choiceUser } = await inquirer.prompt({
        type: "list",
        name: "choiceUser",
        message: "Please choose your pet",
        choices: [
          "Stats",
          "Eat",
          "Drink",
          "Play ball",
          "Learn new command",
          "Sleep",
          "Quit",
        ],
      });
      if (choiceUser === "Stats") await console.log(myPet.stats());
      if (choiceUser === "Eat") await myPet.eats();
      if (choiceUser === "Drink") await myPet.drinks();
      if (choiceUser === "Play ball") await myPet.playBall();
      if (choiceUser === "Learn new command") await myPet.learnNewCommand();
      if (choiceUser === "Sleep") await myPet.sleep();
      if (choiceUser === "Quit") {
        indicator = false;
      }
    } else if (typeOfPet === "cat") {
      const { choiceUser } = await inquirer.prompt({
        type: "list",
        name: "choiceUser",
        message: "Please choose your pet",
        choices: ["Stats", "Eat", "Drink", "Spoil something", "Sleep", "Quit"],
      });
      if (choiceUser === "Stats") await console.log(myPet.stats());
      if (choiceUser === "Eat") await myPet.eats();
      if (choiceUser === "Drink") await myPet.drinks();
      if (choiceUser === "Sleep") await myPet.sleep();
      if (choiceUser === "Spoil something") await myPet.spoilSomething();
      if (choiceUser === "Quit") {
        indicator = false;
      }
    }
  }
  console.log("Thank you. See you next time");
};
game();