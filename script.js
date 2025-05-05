document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.getElementById("task");
    const list = document.getElementById("list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;

        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents toggling "completed" when deleting
            li.remove();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = ""; // Clear input
    });
});
