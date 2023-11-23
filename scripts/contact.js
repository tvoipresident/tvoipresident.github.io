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

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');

    nameError.textContent = '';
    emailError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Invalid email format';
            return false;
        }
    }

    alert("I am 100% going to contact you");
    return true;
}

