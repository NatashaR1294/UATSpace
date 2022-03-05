function findCred() {

    var firstName = document.getElementById("fName").value;

    var lastName = document.getElementById("lName").value;

    var badgeNumb = document.getElementById("badgeID").value;

    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 100) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("notindex.html");
    }
}
