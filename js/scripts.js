/* make sign up form visible */
function showSignUpForm() {
  document.getElementById("sign-up-form").style.display = "block";
  document.getElementById("sign-up-button").style.display = "none";
}

/* make sign up form funtional */
function signUp() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
}

/* add user to database */
function addUserToDatabase(email, password, name, surname) {
  let users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    users = [];
  }
  users.push({ email, password, name, surname });
  localStorage.setItem("users", JSON.stringify(users));
}
