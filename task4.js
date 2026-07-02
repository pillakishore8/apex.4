// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Smooth Scroll to About Section
function scrollAbout() {
    document.getElementById("div1").scrollIntoView({
        behavior: "smooth"
    });
}

// Contact Form Validation
document.getElementById("contactForm").onsubmit = function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill all the fields.");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
};