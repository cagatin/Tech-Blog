// function which creates a request to log out
async function logoutHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Logout Successful!');
        document.location.replace('/');
    } else {
        alert('Failed to Log Out');
    }
}

document.querySelector('#logout-btn').addEventListener('click', logoutHandler);