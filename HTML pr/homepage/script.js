function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Login validation script
// Login validation
document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === 'admin' && password === '123') {
        window.location.href = 'home.html'; // Redirect to the home page
    } else {
        alert('Invalid username or password!');
    }
};

