# TypeScript-based CLI Todo List application.

This is a simple CLI-based Todo List application built with TypeScript. It allows users to add, complete, remove, update, and list their tasks, along with filtering them based on their completion status.

## Features

- **TodoItem Interface**  
  Defines a structured todo item with the following properties:
  - `id`: Unique identifier
  - `task`: Description of the task
  - `completed`: Boolean indicating completion status
  - `dueDate`: The due date of the task

- **TodoList Class**  
  Provides the following methods to manage todo items:
  - `addTodo(task: string, dueDate: Date)`: Adds a new task
  - `completeTodo(id: number)`: Marks a task as completed
  - `removeTodo(id: number)`: Deletes a task
  - `listTodos()`: Displays all tasks
  - `filterTodos(completed: boolean)`: Filters tasks based on their completion status
  - `updateTodo(id: number, newTask: string)`: Updates the task description
  - `clearCompleted()`: Removes all completed tasks

- **Error Handling**  
  - Ensures proper validation when performing operations (e.g., handling invalid `id` values).

- **CLI Testing Example**  
  - Demonstrates functionality by adding, updating, completing, and filtering todos.

## Usage

To run the application, execute the TypeScript file in a Node.js environment.

```sh
ts-node todo-list.
