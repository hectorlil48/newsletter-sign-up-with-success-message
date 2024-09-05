const subscribeForm = document.getElementById("subscribe-form");

function handleSubmit(e) {
  e.preventDefault();

  clearErrors();

  const email = document.getElementById("email").value.trim();

  let isValid = true;

  // Validate Email
  if (email === "") {
    showError("email-error", "Email is required.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("email-error", "Please enter a valid email address.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    clearForm();
    // Perform actual form submission here, like sending data to the server
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

subscribeForm.addEventListener("submit", handleSubmit);
