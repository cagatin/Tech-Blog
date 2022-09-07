// Function which sends a login request to the api
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-password').value;

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed to login')
        }
    }
}
function redirectSignIn() {
    document.location.href = '/signup';
}
document.querySelector('#sign-up-redirect-btn').addEventListener('click', redirectSignIn);
document.querySelector('#submit-btn-login').addEventListener('click', loginFormHandler);