function validateForm(event) {
    if (event) {
        event.preventDefault();
    }

    resetValidationState();

    var idOK = validateID();
    var passwordOK = validatePassword();
    var confirmPasswordOK = validateConfirmPassword();
    var fNameOk = validateFirstName();
    var lNameOK = validateLastName();
    var emailOKResult = validateEmail();
    var phoneOK = validatePhone();
    var addressOK = validateAddress();
    var ageOK = ValidateAge();

    var result = idOK && passwordOK && confirmPasswordOK && fNameOk && lNameOK && emailOKResult && phoneOK && addressOK && ageOK;
    if (!result) {
        return false;
    }

    alert("Validation OK");

    if (event && event.target && typeof event.target.submit === "function") {
        event.target.submit();
    }

    return false;
}

function resetValidationState() {
    var fields = document.querySelectorAll("#form1 input, #form1 select");
    fields.forEach(function (field) {
        field.style.borderColor = "";
    });

    var ageError = document.getElementById("age_error");
    if (ageError) {
        ageError.innerText = "";
    }
}

function requiredFieldOK(fieldId, fieldName) {
    var field = document.getElementById(fieldId);
    if (!field || field.value.trim().length === 0) {
        alert(fieldName + " is required.");
        if (field) {
            field.style.borderColor = "red";
        }
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    var password = document.getElementById("uPass");
    var confirmPassword = document.getElementById("confirmPass");

    if (!confirmPassword || confirmPassword.value.trim().length === 0) {
        return requiredFieldOK("confirmPass", "Password confirmation");
    }

    if (!password || confirmPassword.value !== password.value) {
        alert("Password confirmation must match the password.");
        confirmPassword.style.borderColor = "red";
        return false;
    }

    return true;
}

function validateID() {
    return requiredFieldOK("id", "ID");
}

function validatePassword() {
    var password = document.getElementById("uPass");
    var passwordPattern = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]).{8,}$/;

    if (!password || password.value.trim().length === 0) {
        return requiredFieldOK("uPass", "Password");
    }

    if (!passwordPattern.test(password.value)) {
        alert("Password must be at least 8 characters long, contain one uppercase letter, and contain one special character.");
        password.style.borderColor = "red";
        return false;
    }

    return true;
}

function validateFirstName() {
    return validateName("firstName", "First name");
}

function validateLastName() {
    return validateName("lastName", "Last name");
}

function validateName(fieldId, fieldName) {
    var field = document.getElementById(fieldId);
    var namePattern = /^[A-Za-z\u0590-\u05FF]+(?:[\s'-][A-Za-z\u0590-\u05FF]+)*$/;

    if (!field || field.value.trim().length === 0) {
        return requiredFieldOK(fieldId, fieldName);
    }

    if (!namePattern.test(field.value.trim())) {
        alert(fieldName + " may contain letters, spaces, apostrophes, and hyphens only.");
        field.style.borderColor = "red";
        return false;
    }

    return true;
}

function validateEmail() {
    var email = document.getElementById("uEmail");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || email.value.trim().length === 0) {
        return requiredFieldOK("uEmail", "Email");
    }

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.style.borderColor = "red";
        return false;
    }

    return true;
}

function validatePhone() {
    var phone = document.getElementById("uMobile");
    var phonePattern = /^\+?[\d\s()-]{7,20}$/;

    if (!phone || phone.value.trim().length === 0) {
        return requiredFieldOK("uMobile", "Phone");
    }

    var phoneDigits = phone.value.replace(/\D/g, "");
    if (!phonePattern.test(phone.value.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
        alert("Please enter a valid phone number.");
        phone.style.borderColor = "red";
        return false;
    }

    return true;
}

function validateAddress() {
    return requiredFieldOK("address", "Address");
}

function ValidateAge() {
    var age = document.getElementById("client_age");
    age.style.borderColor = "";
    var error = document.getElementById("age_error").innerText = "";
    var tmpAge = parseInt(age.value);
    if ((age.value.length == 0) || (tmpAge < 13)) {
        age.style.borderColor = "red";
        age.focus();
        var error = document.getElementById("age_error");
        if (age.value.length == 0) {
            error.innerText = "לא הוכנס גיל";
        } else {
            error.innerText = "גיל מינימום כניסה לאתר הוא 13";
        }
        return false;
    }
    return true;
}

