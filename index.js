#! / user/bin/env node 
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what  task  do  you  want to add ",
        },
        {
            name: "addinput",
            type: "confirm",
            message: "Do you  wish to  add another task?",
            default: "false",
        }
    ]);
    todo.push(addTask.todo);
    condition = addTask.addinput;
    console.log(todo);
}
