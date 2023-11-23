$(document).ready(function () {
    var e = [
        {
            question: "What is my name?",
            options: ["Askar", "Bereket", "Nurtas", "Nurken"],
            answer: "AITU",
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
          question:
            "How many languages I know?",
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
            question: "How many pages are there in my website?",
            options: ["7", "5", "6", "2"],
            answer: "7",
        },
        {
            question: "Where am I from?",
            options: ["Italy", "USA", "Kazahstan", "China"],
            answer: "Kazakhstan",
        },
      ],
      n = 0,
      t = 0;
        function i() {
          var t = e[n];
          $("#quiz h3").text(t.question);
          var i = "";
          t.options.forEach(function (e, n) {
              i += `<li style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 5px; margin-left: -150px;">\n<input type="radio" name="answer" id="answer${n}" class="answer" value="${e}" style="margin-right: -620px;">\n<label for="answer${n}" style="margin-left: 0;">${e}</label>\n</li>`;
          }),
              $("#quiz ul").html(i);
        };
  
  
      function a() {
      var n = "";
      (n =
        t === e.length
          ? "Congratulations! You got all the answers correct!"
          : `You scored ${t} out of ${e.length}. Better luck next time!`),
        $("#resultMessage").text(n),
        $("#result").show();
    }
    $("#submit").click(function () {
      $("input.answer:checked").val() === e[n].answer && t++,
        ++n < e.length ? i() : (clearInterval(r), a());
    }),
      i();
    var o = 120,
      r = setInterval(function () {
        o > 0
          ? ($("#timer").text(`Time Left: ${o} seconds`), o--)
          : (clearInterval(r), $("#timer").text("Time's up!"), a());
      }, 1e3);
  });
  