// Login form validation
var loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var errorMsg = document.getElementById("loginError");

        if (email === "" || password === "") {
            errorMsg.textContent = "Please fill in all fields.";
        } else {
            errorMsg.textContent = "";
            alert("Login successful!");
        }
    });
}

// Register form validation
var registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var errorMsg = document.getElementById("registerError");

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            errorMsg.textContent = "Please fill in all fields.";
        } else if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match.";
        } else {
            errorMsg.textContent = "";
            alert("Registration successful!");
        }
    });
}
