// --------------Sign up form Validations------------------------------------//

// ------------------username validation--------------------------------------//
function validateUsername() {
  let username = document.getElementById("username");
  let name_error = document.getElementById("name-error");
  let regExName = /^[A-Za-z][A-Za-z. ]+$/g;

  if (username.value.trim() == "") {
    name_error.innerHTML = "<br />" + "Username cannot be blank";
    return false;
  } else if (username.value.length < 4) {
    name_error.innerHTML =
      "<br />" + "Username name should not be less than 3 characters";
    return false;
  } else if (!username.value.match(regExName)) {
    name_error.innerHTML = "<br />" + "Enter Alphabets alone";
    return false;
  } else {
    name_error.innerHTML = "<span> Username Validated! </span>";
    return true;
  }
}

// ----------------------------email validation---------------------------------//

function validateEmail() {
  let regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let email1 = document.getElementById("email1");
  let email1_error = document.getElementById("email1-error");

  if (email1.value.trim() == "") {
    email1_error.innerHTML = "<br />" + "Email cannot be blank";
    return false;
  } else if (!email1.value.match(regExEmail)) {
    email1_error.innerHTML = "<br />" + "Enter a valid email address";
    return false;
  } else {
    email1_error.innerHTML = "<span> Valid Email Address </span>";
    return true;
  }
}

//------------------------- password validation----------------------------------//

function validatePassword() {
  let regExPassword =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
  let password = document.getElementById("password");
  let password_error = document.getElementById("password-error");

  if (password.value.trim() == "") {
    password_error.innerHTML = "<br />" + "Password cannot be blank";
    return false;
  } else if (!password.value.match(regExPassword)) {
    password_error.innerHTML = "<br />" + "Enter a valid Password";
    return false;
  } else {
    password_error.innerHTML = "<span> Great job password validated! </span>";
    return true;
  }
}

// ----------------------confirm password----------------------------------------//

function validateCPassword() {
  let confirmPassword = document.getElementById("confirmPassword");
  let cpassword_error = document.getElementById("cpassword-error");
  if (confirmPassword.value.trim() == "") {
    cpassword_error.innerHTML = "<br />" + "Confirm Password cannot be blank";
    return false;
  } else if (confirmPassword.value != password.value) {
    cpassword_error.innerHTML = "<br />" + "**Password does not match";
    return false;
  } else {
    cpassword_error.innerHTML = "<span> Password matched successfully! </span>";
    return true;
  }
}
// --------------------------------Phone Number ---------------------------------//

function validatePhone() {
  let regExPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
  let phone = document.getElementById("phone");
  let phone_error = document.getElementById("phone-error");
  if (phone.value.trim() == "") {
    phone_error.innerHTML = "<br />" + "Phone number cannot be blank";
    return false;
  } else if (!phone.value.match(regExPhone)) {
    phone_error.innerHTML = "<br />" + "Invalid format ";
    return false;
  } else {
    phone_error.innerHTML = "<span> Phone Number Validated! </span>";
    return true;
  }
}

// -----------------formValidation----------------------------------------------------//

function formValidation() {
  if (
    !validateUsername() ||
    !validateEmail() ||
    !validatePhone() ||
    !validatePassword() ||
    !validateCPassword()
  ) {
    return false;
  } else {
    return true;
  }
}

// ------------------------------Password Strength Meter-------------------------------------//
let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById("password");
let strengthBadge = document.getElementById("StrengthDisp");

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{9,16})"
);
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{9,}))"
);

function StrengthChecker(PasswordParameter) {
  // We then change the badge's color and text based on the password strength

  if (strongPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = "Strong";
  } else if (mediumPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "orange";
    strengthBadge.textContent = "Medium";
  } else {
    strengthBadge.style.backgroundColor = "red";
    strengthBadge.textContent = "Weak";
  }
}

// Adding an input event listener when a user types to the  password input

password.addEventListener("input", () => {
  //The badge is hidden by default, so we show it

  strengthBadge.style.display = "block";
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it

  timeout = setTimeout(() => StrengthChecker(password.value), 500);

  //Incase a user clears the text, the badge is hidden again

  if (password.value.length !== 0) {
    strengthBadge.style.display != "block";
  } else {
    strengthBadge.style.display = "none";
  }
});

// --------------------end------------------------//
