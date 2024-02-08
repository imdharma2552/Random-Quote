document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById('name').value;
        // Store the name in local storage
        localStorage.setItem('registeredName', name);

        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    });
});