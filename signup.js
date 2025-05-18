function registerUser() {
    var newName = document.forms["signupform"]["newName"].value;
    var newEmail = document.forms["signupform"]["newEmail"].value;
    var newPhone = document.forms["signupform"]["newPhone"].value;
    var newFaculty = document.forms["signupform"]["newFaculty"].value;
    var newPass = document.forms["signupform"]["newPass"].value;

    if (newName === "" || newEmail === "" || newPhone === "" || newFaculty === "" || newPass === "") {
        alert("Please fill in all fields");
        return false;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ 
        name: newName, 
        email: newEmail,
        phone: newPhone,
        faculty: newFaculty,
        password: newPass 
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert("User created successfully!");
    window.location.href = "login.html"; // Redirect to the signup page

    return false; // Prevent form submission
}
