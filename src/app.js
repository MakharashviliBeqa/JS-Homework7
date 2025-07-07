const personalNumber = regForm.querySelector('#personalNumber');
const email = regForm.querySelector('#email');
const password = regForm.querySelector('#password');

function isPersonalNumberValid() {
    const value = personalNumber.value.trim();
    const isOnlyDigits = /^\d{11}$/.test(value);

    if (value === "") {
        setError(personalNumber, "Personal number is required");
        return false;
    } else if (!isOnlyDigits) {
        setError(personalNumber, "Must be exactly 11 digits");
        return false;
    } else {
        setSuccess(personalNumber, "Valid personal number");
        return true;
    }
}

function isEmailValid() {
    const value = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        setError(email, "Email is required");
        return false;
    } else if (!emailPattern.test(value)) {
        setError(email, "Please enter a valid email address");
        return false;
    } else {
        setSuccess(email, "Valid email");
        return true;
    }
}

function isPasswordValid() {
    const value = password.value.trim();
    const minLength = 8;

    if (value === "") {
        setError(password, "Password is required");
        return false;
    } else if (value.length < minLength) {
        setError(password, `Password must be at least ${minLength} characters long`);
        return false;
    } else {
        setSuccess(password, "Valid password");
        return true;
    }
}