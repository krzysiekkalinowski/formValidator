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

//Get field name
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//Check email valid
const checkEmailValid = (input) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
  }
};

//Check required field
const checkRequiredField = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

//Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Minimum length of ${getFieldName(input)} is ${min}`);
  } else if (input.value.length > max) {
    showError(input, `Maximum length of ${getFieldName(input)} is ${max}`);
  } else {
    showSuccess(input);
  }
};

//Check password match
const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess(input2);
  }
};

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequiredField([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmailValid(email);
  checkPasswordMatch(password, password2);
});
