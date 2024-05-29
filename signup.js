document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
        successMessage.style.display = "none"; 
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        successMessage.style.display = "none"; 
    } else {
        errorMessage.textContent = "";
        successMessage.style.display = "block"; 
    }
});
