const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let introduction = {
  introduction: "Welcome to the CLI project",
  instruction: "You can only add,delete,display, and edit tasks",
};

let list = [];

function menu() {
  console.log(introduction.introduction);
  console.log(introduction.instruction);

  function userSelection() {
    rl.question("Select an Option: Add,Delete,Edit", (input) => {
      if (input.trim().toLowerCase() === "add") {
        addTask();
      } else if (input.trim().toLowerCase() === "delete") {
        deleteTask();
      } else if (input.trim().toLowerCase() === "edit") {
        editTask();
      } else if (input.trim().toLowerCase() === "display") {
        displayTasks();
      } else if (input.trim().toLowerCase() === "exit") {
        rl.close();
      } else {
        console.log("Make up your mind!");
        userSelection();
      }
    });
  }
  userSelection();
}

function addTask() {
  rl.question("Enter a task: ", (input) => {
    console.log(`You entered ${input}`);
    list.push(input);
    console.log(list);
    menu();
  });
}

function deleteTask() {
  rl.question("Select a task that you want to delete: ", (input) => {
    console.log(list);
    let elementToRemove = input;
    let indexToRemove = list.indexOf(elementToRemove);
    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }
    console.log(list);
    menu();
  });
}

function editTask() {
  rl.question("Select an index: ", (indexInput) => {
    let index = parseInt(indexInput, 10) - 1;
    if (index >= 0 && index < list.length) {
      rl.question("Enter the new value: ", (newValue) => {
        list[index] = newValue;
        console.log(list);
        menu();
      });
    } else {
      console.log("Invalid index.");
      menu();
    }
  });
}

function displayTasks() {
  console.log(list);
  menu();
}

menu();
