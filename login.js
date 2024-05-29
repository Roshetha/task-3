document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
    } else if (username !== "admin" || password !== "password") { // Example check
        errorMessage.textContent = "Invalid username or password!";
    } else {
        alert("Login successful!");
    }
});
