document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add("fade-in");
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var aboutBox = document.querySelector(".about-box");

    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500);
    }
    addFadeInAnimation(aboutBox);
});

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