// function which displays the password when the checkbox is clicked
function displayPass() {
    let passInput = document.querySelector('#signup-password');
    if (passInput.type == 'password') {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
}

document.querySelector('#show-checkbox').addEventListener('click', displayPass);