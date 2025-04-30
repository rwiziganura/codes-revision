const password = document.getElementById("password");
const passwordcf = document.getElementById("passwordcf");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Reset styles and errors
  nameInput.style.border = "1px solid #ccc";
  emailInput.style.border = "1px solid #ccc";
  password.style.border = "1px solid #ccc";
  passwordcf.style.border = "1px solid #ccc";
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation
  if (name === "") {
    nameInput.style.border = "2px solid red";
    nameError.textContent = "Please fill in the name field";
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameInput.style.border = "2px solid red";
    nameError.textContent = "Please enter a valid name (letters only)";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    emailInput.style.border = "2px solid red";
    emailError.textContent = "Please fill in the email field";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailInput.style.border = "2px solid red";
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Password validation
  if (password.value !== passwordcf.value) {
    password.style.border = "2px solid red";
    passwordcf.style.border = "2px solid red";
    passwordError.textContent = "Passwords do not match";
    isValid = false;
  } else if (password.value === "") {
    password.style.border = "2px solid red";
    passwordcf.style.border = "2px solid red";
    passwordError.textContent = "Please enter a password";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // form.submit(); // Uncomment to actually submit the form
  }
});