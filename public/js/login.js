async function loginFormHanlder(event) {
    event.preventDefault();

    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login')
    }
}