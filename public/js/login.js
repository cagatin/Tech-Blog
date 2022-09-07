// Function which sends a login request to the api
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            document.location.replace('/login');
        }
    }
}

document.querySelector('#submit-btn').addEventListener('submit', loginFormHandler);