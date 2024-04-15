const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "flex flex-col gap-y-2 formControl--js error";
  const formSmall = formControl.querySelector(".formControl--js small");
  formSmall.innerText = message;
};

//Show success
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "flex flex-col gap-y-2 formControl--js success";
};

//Check email valid
const checkEmailValid = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
};

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!checkEmailValid(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else if (password.value !== password2.value) {
    showError(password, "Both passwords must be the same");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password confirm is required");
  } else if (password2.value !== password.value) {
    showError(password2, "Both passwords must be the same");
  } else {
    showSuccess(password2);
  }
});
