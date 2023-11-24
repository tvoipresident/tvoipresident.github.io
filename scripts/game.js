$(document).ready(function () {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            }
        return array;
    }

    var flagIds = ["kazakhstan", "usa", "italy", "china", "england"];
    var targetBoxes = ["kazakhstan-target", "usa-target", "italy-target", "china-target", "england-target"];

    flagIds = shuffleArray(flagIds);
    targetBoxes = shuffleArray(targetBoxes);
    $(".flag").each(function (index) {
        $(this).attr("id", flagIds[index]);
    });

    $(".target").each(function (index) {
        $(this).attr("id", targetBoxes[index]);
    });

    $(".flag").draggable({
        revert: "invalid"
    });

    $(".target").droppable({
        accept: ".flag",
        drop: function (event, ui) {
            var flagName = ui.draggable.attr("id");
            var targetId = $(this).attr("id");

            if (flagName === targetId) {
                alert("Correct! You matched the flag!");
            } else {
                alert("Incorrect! Try again.");
            }
        }
    });
});