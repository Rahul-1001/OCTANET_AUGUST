let globalId = 1;

function markAsDone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";
    parent.classList.add("completed");
}

function deleteTodo(todoId) {
    const parent = document.getElementById(todoId);
    parent.remove(); // Remove the todo item from the DOM
}

function createChild(title, description, id) {
    const child = document.createElement("div");
    child.className = "todo-item";  // Added a class name for easier styling

    const firstGrandParent = document.createElement("div");
    firstGrandParent.innerHTML = title;

    const secondGrandParent = document.createElement("div");
    secondGrandParent.innerHTML = description;

    const markAsDoneButton = document.createElement("button");
    markAsDoneButton.innerHTML = "Mark as done";
    markAsDoneButton.setAttribute("onclick", `markAsDone(${id})`);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick", `deleteTodo(${id})`);

    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(markAsDoneButton);
    child.appendChild(deleteButton);
    child.setAttribute("id", id);

    return child;
}

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("todos");

    if (title && description) {
        parent.appendChild(createChild(title, description, globalId++));

        // Clear the input fields after adding the todo
        document.getElementById("title").value = '';
        document.getElementById("description").value = '';
    } else {
        alert("Please enter both a title and description for the todo.");
    }
}
