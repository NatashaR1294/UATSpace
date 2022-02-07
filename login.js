function findCreds() {
    //function to find 
    var firstName = document.getElementById("fName").value;
    //var locates ID for firstname
    var lastname = document.getElementById("lName").value;
    //var locates ID for lastname
    var badgeNumb = document.getElementById("badgeID").value;
    //var that locates Badge ID
    var fullName = firstName + " " + lastName;
    //combines variables of first an last names

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