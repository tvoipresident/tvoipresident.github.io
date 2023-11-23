$(document).ready(function () {
    // Shuffle function to randomize flags and target boxes order
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            }
        return array;
    }

    // Array to store flag IDs and target box IDs
    var flagIds = ["kazakhstan", "usa", "italy", "china", "england"];
    var targetBoxes = ["kazakhstan-target", "usa-target", "italy-target", "china-target", "england-target"];

    // Randomize flag and target box order
    flagIds = shuffleArray(flagIds);
    targetBoxes = shuffleArray(targetBoxes);

    // Assign randomized flag IDs to the flags and target box IDs to the target boxes
    $(".flag").each(function (index) {
        $(this).attr("id", flagIds[index]);
    });

    $(".target").each(function (index) {
        $(this).attr("id", targetBoxes[index]);
    });

    // Make flags draggable
    $(".flag").draggable({
        revert: "invalid"
    });

    // Make target boxes droppable
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