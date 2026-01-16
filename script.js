// Menu toggle for mobile
const menu = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Registration form handling
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if(name && email && password) {
        alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
        registrationForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});