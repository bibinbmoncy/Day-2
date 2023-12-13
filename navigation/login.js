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
// -----------------------form return-----------------------//
function validateForm() {
  if (!validateEmail() || !validatePassword()) {
    return false;
  } else {
    return true;
  }
}
// -----------------end form return--------------------//