
function start() { 
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
    
    }
    
    function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>"; 
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false; document.getElementById("stopButton").disabled = true;
    
    }
    