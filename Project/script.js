window.addEventListener("DOMContentLoaded", function() {
  var emailInput = document.getElementById("email");
  emailInput.addEventListener("input", validateEmail);

  var passwordInput = document.getElementById("password");
  passwordInput.addEventListener("input", validatePassword);
});

function validateEmail() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  var isValid = emailPattern.test(email);

  if (!isValid) {
    emailInput.setCustomValidity("Please enter a valid Gmail address.");
  } else {
    emailInput.setCustomValidity("");
  }
}

function validatePassword() {
  var passwordInput = document.getElementById("password");
  var password = passwordInput.value;
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var isValid = passwordPattern.test(password);

  if (!isValid) {
    passwordInput.setCustomValidity("Password must contain one uppercase letter, one lowercase letter, one numeric digit, one special character, and be at least 8 characters long.");
  } else {
    passwordInput.setCustomValidity("");
  }
}

function fadeOut(element, duration) {
  element.style.transition = "opacity " + duration + "ms ease";
  element.style.opacity = 0;
  setTimeout(function() {
    element.style.display = "none";
  }, duration);
}

function fadeIn(element, duration) {
  element.style.transition = "opacity " + duration + "ms ease";
  element.style.opacity = 1;
  element.style.display = "block";
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var signupBox = document.querySelector(".signup-box");
  fadeOut(signupBox, 500);

  setTimeout(function() {
    window.location.href = "redirect-page.html"; 
  }, 500);
});