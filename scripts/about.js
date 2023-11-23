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
    var aboutBox = document.querySelector(".about-box");

    // Add a class to trigger the fade-in animation with a delay
    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.classList.add("fade-in");
        }, 500); // Delay the animation by 500ms (adjust as needed)
    }

    // Trigger the fade-in animation for the about-box element
    addFadeInAnimation(aboutBox);
});
