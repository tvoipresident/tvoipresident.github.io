$(document).ready(function () {
    var e = [
      {
        question: "What is my name?",
        options: ["Askar", "Bereket", "Nurtas", "Nurken"],
        answer: "Bereket",
      },
      {
        question: "When is my birthday?",
        options: ["24.11.2004", "21.07.2005", "30.11.2004", "28.12.2004"],
        answer: "30.11.2004",
      },
      {
        question: "What are one of my hobbies?",
        options: ["Cooking", "Drawing", "Travelling", "Dancing"],
        answer: "Cooking",
      },
      {
        question: "How many languages I know?",
        options: ["4", "10", "7", "6"],
        answer: "6",
      },
      {
        question: "One of the assignments that I have to do in to-do list?",
        options: ["Assignment 4", "OS Homework", "Russian Language HW", "Assignment 1"],
        answer: "OS Homework",
      },
      {
        question: "What is my last name?",
        options: ["Kuanyshbay", "Kenen", "Orysbay", "Koishyev"],
        answer: "Orysbay",
      },
      {
        question: "My university?",
        options: ["IITU", "KBTU", "ENU", "AITU"],
        answer: "AITU",
      },
      {
        question: "What is my Instagram username?",
        options: ["orysbay.b", "bereket.o", "imbereketorysbay", "ryan_gosling"],
        answer: "orysbay.b",
      },
      {
        question: "How many pages are there on my website?",
        options: ["7", "5", "6", "2"],
        answer: "7",
      },
      {
        question: "Where am I from?",
        options: ["Italy", "USA", "Kazakhstan", "China"],
        answer: "Kazakhstan",
      },
    ];
  
    var n = 0,
      t = 0;
  
    function showResultModal() {
      var resultMessage =
        t === e.length
          ? "Congratulations! You got all the answers correct!"
          : `You scored ${t} out of ${e.length}. Better luck next time!`;
  
      $("#quizResultMessage").text(resultMessage);
  
      // Show the modal
      $("#quizResultModal").modal("show");
    }
  
    function displayQuestion() {
      var currentQuestion = e[n];
      $("#quiz h3").text(currentQuestion.question);
  
      var optionsHTML = "";
      currentQuestion.options.forEach(function (option, index) {
        optionsHTML += `<li style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 5px; margin-left: -150px;">
          <input type="radio" name="answer" id="answer${index}" class="answer" value="${option}" style="margin-right: -620px;">
          <label for="answer${index}" style="margin-left: 0;">${option}</label>
        </li>`;
      });
  
      $("#quiz-ul").html(optionsHTML);
    }
  
    $("#submit").click(function () {
      $("input.answer:checked").val() === e[n].answer && t++;
      ++n < e.length ? displayQuestion() : (clearInterval(timerInterval), showResultModal());
    });
  
    displayQuestion();
  
    var timer = 120;
    var timerInterval = setInterval(function () {
      if (timer > 0) {
        $("#timer").text(`Time Left: ${timer} seconds`);
        timer--;
      } else {
        clearInterval(timerInterval);
        $("#timer").text("Time's up!");
        showResultModal();
      }
    }, 1000);
  });
  