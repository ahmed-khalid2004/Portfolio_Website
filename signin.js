function test() {
    var name = document.forms["myform"]["fn"].value;
    var pas = document.forms["myform"]["ps"].value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    
    for (var i = 0; i < users.length; i++) {
        if (name == users[i].name && pas == users[i].password) {
            alert("Sign in successful");
            window.location.href = "web.html";
            return false;
        }
    }
    
    if (name === "" || pas === "") {
        alert("Name or password is empty");
    } else {
        alert("Data not valid");
    }
    
    return false;
}
