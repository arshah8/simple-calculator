#!/usr/bin/env node

//imported inquirer to take user input
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secndNumber" },
  {
    message: "Select the Operator",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
//conditions to perform a specific operation
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secndNumber);
} else if (answer.operators === "Substraction") {
  console.log(answer.firstNumber - answer.secndNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secndNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secndNumber);
} else {
  console.log("Invalid Choice");
}
