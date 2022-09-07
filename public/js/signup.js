// function which displays the password when the checkbox is clicked
function displayPass() {
    let passInput = document.querySelector('#signup-password');
    if (passInput.type == 'password') {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
}

// Funciton to submit register data
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value;
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if (response.ok) {
            alert('Account successfully created!');
            document.location.replace('/');
        } else {
            alert('failed to create account')
        }
    }
}

document.querySelector('#submit-btn-signup').addEventListener('click', signupFormHandler)
document.querySelector('#show-checkbox').addEventListener('click', displayPass);