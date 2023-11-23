$(document).ready(function() {
    $(".navbar-nav .nav-item").each(function(index) {
        setTimeout(function() {
            $(this).addClass("fade-in");
        }.bind(this), index * 200);
    });

    var boxElement = $(".box");
    var toastElement = $("#toast-message");

    function addFadeInAnimation(element) {
        setTimeout(function() {
            element.addClass("fade-in");
        }, 500);
    }

    addFadeInAnimation(boxElement);
    addFadeInAnimation(toastElement);
});
