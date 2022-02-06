function findCreds() {
    //function to find 
    var firstName = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastname;

    if(fullName.length > 16 || fullName.length < 2 ) {
        document.getElementById("loginStatus").innerHTML = "Please enter valid number of characters";
    }
    else if (badgeNumb > 999 || badgeNumb < 0) { 
        document.getElementById("loginStatus").innerHTML = "Please enter valid Badge ID";
    }
    else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("index.html");
    }



    }