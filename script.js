// script.js

document.getElementById("add-btn").addEventListener("click", function() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        li.innerHTML = `${todoText} <button class="remove-btn">Remove</button>`;
        todoList.appendChild(li);

        // Add event listener to the remove button
        li.querySelector(".remove-btn").addEventListener("click", function() {
            li.remove();
        });

        todoInput.value = ""; // Clear input field after adding
    }
});

// Allow pressing Enter to add a to-do
document.getElementById("todo-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add-btn").click();
    }
});
