(function() {
    var removeMessages = function() {
        var chatLines = document.querySelectorAll(".chat-line"),
            numRemoved = 0;

        [].forEach.call(chatLines, function(chatLine) {
            var msg = chatLine.querySelector(".message");

            if (msg.dataset.raw === "CS%20LUL") {
                chatLine.parentNode.removeChild(chatLine);
                numRemoved++;
            }
        });
    }


    setInterval(removeMessages, 500);


    console.log("Remove CS LUL - init");
}());