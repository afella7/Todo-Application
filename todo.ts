export {}

interface TodoItem {
    id: number; // Unique identifier for the todo item
    task: string; // Description of the task
    completed: boolean; // Status of the task (completed or not)
    dueDate: Date; // Due date of the task
}

class TodoList {
    private todos: TodoItem[] = []; // Array to store todo items
    private nextId: number = 1; // ID counter for new todo items

    // Adds a new todo item to the list
    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = { id: this.nextId++, task, completed: false, dueDate };
        this.todos.push(newTodo);
        console.log(`Added: "${task}" with Due Date: ${dueDate.toDateString()}`);
    }

    // Marks a todo item as completed by ID
    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Completed: "${todo.task}"`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    // Removes a todo item by ID
    removeTodo(id: number): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const removed = this.todos.splice(index, 1);
            console.log(`Removed: "${removed[0].task}"`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    // Lists all todo items
    listTodos(): void {
        if (this.todos.length === 0) {
            console.log("No todos available.");
            return;
        }
        this.todos.forEach(todo => {
            console.log(`${todo.id}. [${todo.completed ? "✔" : "✘"}] ${todo.task} (Due: ${todo.dueDate.toDateString()})`);
        });
    }

    // Filters and displays todos based on their completion status
    filterTodos(completed: boolean): void {
        const filtered = this.todos.filter(todo => todo.completed === completed);
        if (filtered.length === 0) {
            console.log(completed ? "No completed tasks." : "No pending tasks.");
            return;
        }
        filtered.forEach(todo => {
            console.log(`${todo.id}. ${todo.task} (Due: ${todo.dueDate.toDateString()})`);
        });
    }

    // Updates the task description of a todo item by ID
    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
            console.log(`Updated Todo ID ${id}: "${newTask}"`);
        } else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }

    // Clears all completed todo items from the list
    clearCompleted(): void {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => !todo.completed);
        console.log(`Cleared ${initialLength - this.todos.length} completed tasks.`);
    }
}

// CLI Testing Example
const todoList = new TodoList();

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

