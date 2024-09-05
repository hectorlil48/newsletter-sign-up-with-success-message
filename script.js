const subscribeForm = document.getElementById("subscribe-form");
const successSection = document.getElementById("success-section");
const formSection = document.getElementById("form-section");
const dismissButton = document.querySelector(".success-btn");

function handleSubmit(e) {
  e.preventDefault();

  clearErrors();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  let isValid = true;

  // Validate Email
  if (email === "") {
    showError("email-error", "Email is required.");
    emailInput.classList.add("input-error"); // Add error class
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("email-error", "Please enter a valid email address.");
    emailInput.classList.add("input-error"); // Add error class
    isValid = false;
  } else {
    emailInput.classList.remove("input-error"); // Remove error class if valid
  }

  if (isValid) {
    // Hide form and show success message
    formSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    clearForm();
  }
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  document.getElementById("email-error").textContent = "";
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function clearForm() {
  document.getElementById("email").value = "";
}

// Event listener for the dismiss button
dismissButton.addEventListener("click", () => {
  successSection.classList.add("hidden");
  formSection.classList.remove("hidden");
});

subscribeForm.addEventListener("submit", handleSubmit);
