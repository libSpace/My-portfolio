//Validation
// function validate() {
//     const name = document.getElementsByClassName("name").value;
//     const email = document.getElementsByClassName("email").value;
//     const phone = document.getElementsByClassName("phone").value;
//     const feed = document.getElementsByClassName("feed").value;

//     function validateEmail(email) {
//         // Regular expression for matching email addresses
//         var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//         return pattern.test(email);
//     }

//     if (name === "" || email === "" || phone === "" || feed === "") {
//         alert("The form is not fully filled!");
//         return false;
//     } else if (!validateEmail(email)) {
//         alert("Check your email");
//         return false;
//     } else {
//         alert("Success");
//         return true;
//     }
// }
function openModal(message) {
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  function validate() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;

    // Basic validation for required fields
    if (name === "" || email === "" || phone === "" || message === "") {
      openModal("Please fill out all required fields.");
      return false;
    }

    // Validation for email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      openModal("Please enter a valid email address.");
      return false;
    }

    // Validation for phone number format (optional)
    // Modify the regex pattern based on your phone number format requirements
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      openModal("Please enter a valid phone number.");
      return false;
    }

    // Additional validation rules can be added based on your requirements

    // If all validations pass, the form will be submitted
    return true;
  }







const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

