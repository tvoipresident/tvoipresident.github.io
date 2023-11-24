document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star-widget input');
    const formHeader = document.querySelector('form header');
    const formTextarea = document.querySelector('.textarea textarea');
    const submitButton = document.querySelector('.btn button');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.id.split('-')[1];
            formHeader.innerText = getHeaderMessage(rating);
        });
    });

    formTextarea.addEventListener('input', function() {
        if (this.value.trim() !== "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        $('#feedbackModal').modal('show');
    });

    function getHeaderMessage(rating) {
        const messages = ["I don't like it", "Some improvements you can work on", "It's ok", "I like it", "Awesome"];
        return messages[rating - 1];
    }
});
