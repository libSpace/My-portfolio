//Validation
function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const feed = document.getElementById("feed").value;

    function validateEmail(email) {
        // Regular expression for matching email addresses
        var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return pattern.test(email);
    }

    if (name === "" || email === "" || phone === "" || feed === "") {
        alert("The form is not fully filled!");
        return false;
    } else if (!validateEmail(email)) {
        alert("Check your email");
        return false;
    } else {
        alert("Success");
        return true;
    }
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

