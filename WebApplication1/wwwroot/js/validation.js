function validateForm() {
    var fname = firstNameOK();
    var lname = lastNameOK();
    var email = emailOK();

    var result = fname && lname && email;
    if (result) {
        alert("Validation OK");
    }
    return false;
}

function firstNameOK() {
    var firstName = document.getElementById("firstName").value;
    if (firstName.length == 0) {
        alert("First name is required.");
        document.getElementById("firstName").style.borderColor = "red";
        return false;
    }
    return true;
}

function emailOK() {
    var emailInput = document.getElementById("uEmail");
    var email = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.style.borderColor = "red";
        return false;
    }

    return true;
}

function lastNameOK() {
    var lastName = document.getElementById("lastName").value;
    if (lastName.length == 0) {
        alert("Last name is required.");
        document.getElementById("lastName").style.borderColor = "red";
        return false;
    }
    return true;
}

