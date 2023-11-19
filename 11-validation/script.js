// error messages
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
// input fields
let nameField = document.getElementById("name-field");
let phoneField = document.getElementById("phone-field");
let emailField = document.getElementById("email-field");
let messageField = document.getElementById("message-field");

nameField.onkeyup = () => {
  let name = nameField.value;

  if (name.length === 0) {
    nameError.innerHTML = "name is required";
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
};

phoneField.onkeyup = () => {
  let phone = phoneField.value;

  if (phone.length === 0) {
    phoneError.innerHTML = "phone no. is required";
  } else if (phone.length > 15) {
    phoneError.innerHTML = "phone no. needs to be less than 15 digits";
  } else if (!/^[0-9]+$/.test(phone)) {
    phoneError.innerHTML = "phone no. needs to be only digits";
  } else {
    phoneError.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
};

emailField.onkeyup = () => {
  let email = emailField.value;

  if (email.length === 0) {
    emailError.innerHTML = "email is required";
  } else if (
    !/^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)
  ) {
    emailError.innerHTML = "email is invalid";
  } else {
    emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
};

messageField.onkeyup = () => {
  let message = messageField.value;
  let required = 15;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
  } else {
    messageError.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
};

function validateForms() {
  if (
    !nameField.onkeyup() ||
    !phoneField.onkeyup() ||
    !emailField.onkeyup() ||
    !messageField.onkeyup()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error before submitting";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 2000);
    return false;
  }
}
