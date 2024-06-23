function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name.trim() == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email.trim() == "") {
        alert("Email must be filled out");
        return false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            alert("Invalid email address");
            return false;
        }
    }

    if (phone.trim() == "") {
        alert("Phone number must be filled out");
        return false;
    }

    if (message.trim() == "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}
