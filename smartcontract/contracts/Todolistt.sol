// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TasksContract {
struct Task {
string description;
bool isCompleted;
}
Task[] public tasks; // an array of Task structs

// function to add a new task to the tasks array
function addTask(string memory _description) public {
    tasks.push(Task(_description, false));
}

// function to mark a task as completed
function completeTask(uint256 _index) public {
    require(_index < tasks.length, "Index out of range");
    tasks[_index].isCompleted = true;
}

// function to view all tasks in the tasks array
function viewTasks() public view returns (Task[] memory) {
    return tasks;
}

// function to delete all completed tasks from the tasks array
function deleteCompletedTasks() public {
    uint256 i = 0;
    while (i < tasks.length) {
        if (tasks[i].isCompleted) {
            if (i != tasks.length - 1) {
                tasks[i] = tasks[tasks.length - 1];
            }
            tasks.pop();
        } else {
            i++;
        }
    }
}
}