function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");

    if (user === "" || pass === "") {
        error.textContent = "Please fill all fields";
    } else {
        error.textContent = "";
        alert("Login Successful!");
    }
}

function resetPassword() {
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const error = document.getElementById("resetError");

    if (newPass === "" || confirmPass === "") {
        error.textContent = "Both fields are required";
    } 
    else if (newPass !== confirmPass) {
        error.textContent = "Passwords do not match";
    } 
    else {
        error.textContent = "";
        alert("Password Reset Successful");
        window.location.href = "index.html";
    }
}
