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
  } else if (
    !String(email.value).toLowerCase ===
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
  ) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
});
