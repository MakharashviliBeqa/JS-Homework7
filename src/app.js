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
    const isOnlyDigits = /^\d{11}$/.test(value);

    if (value === "") {
        setError(personalNumber, "Email is required");
        return false;
    } else if (!isOnlyDigits) {
        setError(personalNumber, "Must be exactly 11 digits");
        return false;
    } else {
        setSuccess(personalNumber, "Valid Personal number");
    } return true;
}

function isPasswordValid() {
    const value = password.value.trim();
    const isOnlyDigits = /^\d{11}$/.test(value);

    if (value === "") {
        setError(personalNumber, "Password is required");
        return false;
    } else if (!isOnlyDigits) {
        setError(personalNumber, "Must be exactly 11 digits");
        return false;
    } else {
        setSuccess(personalNumber, "Valid Password");
    } return true;
}
