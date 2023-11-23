document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add("fade-in");
        }, index * 200); // Delay each item's animation by 200ms
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements you want to animate
    var toDoSection = document.querySelector(".to-do");
    var timerSection = document.querySelector(".timer-container");

    // Add a class to trigger the fade-in animation with a delay
    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500); // Delay the animation by 500ms (adjust as needed)
    }

    // Trigger the fade-in animation for the to-do and timer sections
    addFadeInAnimation(toDoSection);
    addFadeInAnimation(timerSection);

});



// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.querySelector(".task-input");
    const taskList = document.querySelector(".list");

    // Function to create a new task item
    function createTask(taskName) {
        const li = document.createElement("li");
        li.className = "task";

        const container = document.createElement("div");
        container.className = "container_to-do";

        const circle = document.createElement("div");
        circle.className = "circle";

        const span = document.createElement("span");
        span.className = "task-name";
        span.textContent = taskName;

        const closeIcon = document.createElement("i");
        closeIcon.className = "bx bx-x close-icon";
        closeIcon.addEventListener("click", removeTask);

        container.appendChild(circle);
        container.appendChild(span);
        li.appendChild(container);
        li.appendChild(closeIcon);
        taskList.appendChild(li);
    }

    // Function to handle task submission
    function addTask(event) {
        if (event.key === "Enter") {
            const taskName = taskInput.value.trim();
            if (taskName !== "") {
                createTask(taskName);
                taskInput.value = "";
            }
        }
    }

    // Function to mark a task as completed
    function toggleCompleted() {
        const task = this.closest(".task");
        task.classList.toggle("completed");
    }

    // Function to remove a task
    function removeTask() {
        const task = this.closest(".task");
        task.remove();
    }

    // Event listeners
    taskInput.addEventListener("keypress", addTask);
    taskList.addEventListener("click", function(event) {
        if (event.target.matches(".circle")) {
            toggleCompleted.call(event.target);
        } else if (event.target.matches(".close-icon")) {
            removeTask.call(event.target);
        }
    });
});

let timer;
let timerDuration;

function startTimer() {
    const timerInput = document.getElementById("timer-input");
    timerDuration = timerInput.value;
    if (timerDuration <= 0 || isNaN(timerDuration)) {
        alert("Please enter a valid time in seconds.");
        return;
    }

    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = timerDuration;
    timerDisplay.classList.add("running");

    timer = setInterval(() => {
        timerDuration--;
        timerDisplay.textContent = timerDuration;

        if (timerDuration <= 0) {
            clearInterval(timer);
            timerDisplay.classList.remove("running");
            alert("Time is up.");
        }
    }, 1000);
}