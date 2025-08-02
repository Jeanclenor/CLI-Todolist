const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let introduction = {
  introduction: "Welcome to the CLI project",
  instruction: "You can only add,delete, and edit tasks",
  addTask: "Add Task(Choose 1)",
  deleteTask: "Add Task(Choose 2 also you start from 0-3 to delete)",
  editTask: "Add Task(Choose 3)",
  displayTask: "Add Task(Choose 4)",
  finalMessage: "Goodbye!",
};

console.log(introduction.introduction);
console.log(introduction.instruction);
console.log(introduction.finalMessage);

let list = [];

function addTask(a) {
  rl.question("Enter a task: ", (input) => {
    console.log(`You entered ${input}`);
    list.push(input);
    rl.close();
  });
}
addTask(list);

// Going to allow user to delete task here

function deleteTask(b) {
  rl.question("Delete a task: ", (input) => {
    console.log(`You deleted ${input}`);

    const itemToRemove = input;

    const newList = list.filter((item) => item !== itemToRemove);
    console.log(newList);
    rl.close();
  });
}

deleteTask(list);

// Editing goes down here
