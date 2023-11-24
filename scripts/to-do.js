document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add("fade-in");
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var toDoSection = document.querySelector(".to-do");
    var timerSection = document.querySelector(".timer-container");

    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500);
    }

    addFadeInAnimation(toDoSection);
    addFadeInAnimation(timerSection);

});


document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.querySelector(".task-input");
    const taskList = document.querySelector(".list");

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

    function addTask(event) {
        if (event.key === "Enter") {
            const taskName = taskInput.value.trim();
            if (taskName !== "") {
                createTask(taskName);
                taskInput.value = "";
            }
        }
    }

    function toggleCompleted() {
        const task = this.closest(".task");
        task.classList.toggle("completed");
    }

    function removeTask() {
        const task = this.closest(".task");
        task.remove();
    }

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

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    scrollToTopBtn.addEventListener("click", function () {
      document.documentElement.scrollTop = 0;
    });
});