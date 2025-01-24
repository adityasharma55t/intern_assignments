// New password verification code
const passwordInput = document.getElementById('password');
const passwordChecks = document.querySelectorAll('.passwordChecks p');
const passwordChecksContainer = document.querySelector('.passwordChecks');
const exclamationIcon = document.getElementById('exclamationIcon');
const passwordToggler = document.getElementById("passwordToggler");

const checkMark = './assets/checkmark.png';
const close = './assets/close.png';
const eye = './assets/eye.svg';
const eyeSlash = './assets/eyeSlash.svg';

let viewChecks = false;
//Event Listener to verify if password meets criteria
passwordInput.addEventListener('input', () => {

    viewChecks = true;
    if(viewChecks == true){
        passwordChecksContainer.classList.remove('hidden');
    }
    let password = passwordInput.value;
    console.log(password);
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[@@#$%^&*(),.]/;
    const minLength = 8;

    let isValid = true;

    if (lowerCaseRegex.test(password)) {
        passwordChecks[0].querySelector('img').src = checkMark;
    } else {
        passwordChecks[0].querySelector('img').src = close;
        isValid = false;
    }

    if (upperCaseRegex.test(password)) {
        passwordChecks[1].querySelector('img').src = checkMark;
    } else {
        passwordChecks[1].querySelector('img').src = close;
        isValid = false;
    }

    if (numberRegex.test(password)) {
        passwordChecks[2].querySelector('img').src = checkMark;
    } else {
        passwordChecks[2].querySelector('img').src = close;
        isValid = false;
    }

    if (specialCharRegex.test(password)) {
        passwordChecks[3].querySelector('img').src = checkMark;
    } else {
        passwordChecks[3].querySelector('img').src = close;
        isValid = false;
    }

    if (password.length >= minLength) {
        passwordChecks[4].querySelector('img').src = checkMark;
    } else {
        passwordChecks[4].querySelector('img').src = close;
        isValid = false;
    }

    if (isValid) {
        exclamationIcon.classList.add('hidden');
    } else {
        exclamationIcon.classList.remove('hidden');
    }
});

//Event listener to toggle password view
passwordToggler.addEventListener('click', () => {
    if (passwordInput.type == 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordToggler.src = eyeSlash;
    } else {
        passwordInput.setAttribute('type', 'password');
        passwordToggler.src = eye;
    }

});
