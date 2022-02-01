function simpleCount() {
//Function for countdown
    var currTime = 10;
    //variable number
    for (var i = 1; i < 12; i++) {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "time remaining is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}
