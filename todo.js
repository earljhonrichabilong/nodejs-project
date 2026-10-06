let tasks = ["Learn JavaScript", "Build a GitHub repo"];

function addTask(newTask) {
    tasks.push(newTask);
    console.log("Added task: " + newTask);
}

addTask("Commit code changes");
console.log("Current To-Do List:", tasks);