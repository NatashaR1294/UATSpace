function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {      
            //if makes a statement
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
                //locates timer reference id
            }, 1000 * i);
        } else if (i > 6) {
            //if the if statement is true
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            //if the if statement is false
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}