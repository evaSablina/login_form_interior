function validation() {
    if (document.FormFill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.FormFill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "Atleast 6 characters*";
        return false;
    } else if (document.FormFill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.FormFill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your Password*";
        return false;
    } else if (document.FormFill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be atleast 6 characters*";
        return false;
    } else if (document.FormFill.Password.value == document.FormFill.Password.value) {
        popup.classList.add("open-slide")
        return false;
    }
}
var popup = document.getElementById("popup");

function closeSlide() {
    popup.classList.remove("open-slide")
}