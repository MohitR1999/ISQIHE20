var pass = document.getElementById("pass"),
    confirm_pass = document.getElementById("confirm_pass"),
    first_name = document.getElementById("first_name"),
    last_name = document.getElementById("last_name"),
    email = document.getElementById("email");

function validatePassword() {
    if (pass.value != confirm_pass.value) {
        confirm_pass.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_pass.setCustomValidity('');
    }
}

pass.onchange = validatePassword;
confirm_pass.onkeyup = validatePassword;

first_name.onchange = validatePassword;
last_name.onchange = validatePassword;
email.onchange = validatePassword;