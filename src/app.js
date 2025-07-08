const regForm = document.querySelector('#registration-form')
const personalNumber = document.querySelector('#personal-number')
const password  = document.querySelector('#password')
const email = document.querySelector('#email')


regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const pn = personalNumber.value.trim();
    const isPNValid = /^\d{11}$/.test(pn);

    const em = email.value.trim();
    const isEmailValid = em.endsWith("@gmail.com");

    const pw = password.value.trim();
    const isPWValid = pw.length >=8;


    if (!isPNValid) {
        console.log("Personal number must be exactly 11 digits!");
    }

    if (!isEmailValid) {
        console.log("Email must end with @gmail.com!");
    }

    if (!isPWValid) {
        console.log("Password must be at least 8 characters!");
    } else {
        console.log("All good!");
    }
});