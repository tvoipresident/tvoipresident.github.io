document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add("fade-in");
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var contactBox = document.querySelector(".contact-box");

    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500);
    }
    addFadeInAnimation(contactBox);

    
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const modal = new bootstrap.Modal(document.getElementById('myModal'));

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      const modalMessage = document.getElementById("modal-message");
      modalMessage.textContent = `Thank you, ${name}! We will contact you at ${email}.`;

      modal.show();
    });
  });

