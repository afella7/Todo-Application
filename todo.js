"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = []; // Array to store todo items
        this.nextId = 1; // ID counter for new todo items
    }
    // Adds a new todo item to the list
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = { id: this.nextId++, task: task, completed: false, dueDate: dueDate };
        this.todos.push(newTodo);
        console.log("Added: \"".concat(task, "\" with Due Date: ").concat(dueDate.toDateString()));
    };
    // Marks a todo item as completed by ID
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
            console.log("Completed: \"".concat(todo.task, "\""));
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    // Removes a todo item by ID
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            var removed = this.todos.splice(index, 1);
            console.log("Removed: \"".concat(removed[0].task, "\""));
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    // Lists all todo items
    TodoList.prototype.listTodos = function () {
        if (this.todos.length === 0) {
            console.log("No todos available.");
            return;
        }
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ". [").concat(todo.completed ? "✔" : "✘", "] ").concat(todo.task, " (Due: ").concat(todo.dueDate.toDateString(), ")"));
        });
    };
    // Filters and displays todos based on their completion status
    TodoList.prototype.filterTodos = function (completed) {
        var filtered = this.todos.filter(function (todo) { return todo.completed === completed; });
        if (filtered.length === 0) {
            console.log(completed ? "No completed tasks." : "No pending tasks.");
            return;
        }
        filtered.forEach(function (todo) {
            console.log("".concat(todo.id, ". ").concat(todo.task, " (Due: ").concat(todo.dueDate.toDateString(), ")"));
        });
    };
    // Updates the task description of a todo item by ID
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
            console.log("Updated Todo ID ".concat(id, ": \"").concat(newTask, "\""));
        }
        else {
            console.log("Todo with ID ".concat(id, " not found."));
        }
    };
    // Clears all completed todo items from the list
    TodoList.prototype.clearCompleted = function () {
        var initialLength = this.todos.length;
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
        console.log("Cleared ".concat(initialLength - this.todos.length, " completed tasks."));
    };
    return TodoList;
}());
// CLI Testing Example
var todoList = new TodoList();
// Adding sample todos
todoList.addTodo("Buy groceries", new Date("2024-03-05"));
todoList.addTodo("Finish report", new Date("2024-03-10"));
todoList.listTodos();
// Marking a todo as completed
todoList.completeTodo(1);
todoList.listTodos();
// Updating a todo item
todoList.updateTodo(2, "Finish report and submit");
todoList.listTodos();
// Filtering todos
todoList.filterTodos(true);
todoList.filterTodos(false);
// Clearing completed tasks
todoList.clearCompleted();
todoList.listTodos();
