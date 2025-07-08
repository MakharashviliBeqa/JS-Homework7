const regForm = document.querySelector('#regForm')
const personalNumber = document.querySelector('#personalNumber')
const password  = document.querySelector('#password')
const email = document.querySelector('#email')
const errorMessage = document.querySelector('#errorMessage')


regForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const pn = personalNumber.value.trim();
const isPNValid = /^\d{11}$/.test(pn);

const em = email.value.trim();
const isEmailValid = em.endsWith("@gmail.com");

const pw = password.value.trim();
const isPWValid = pw.length >=8;


if (!isPNValid) {
    errorMessage.textContent = "Personal number must be 11 digits!";
} else if (!isEmailValid) {
    errorMessage.textContent = "Email must end with @gmail.com!";
} else if (!isPWValid) {
    errorMessage.textContent = "Password must be at least 8 characters!";
} else {
    errorMessage.textContent = "All good!";
}