//your JS code here. If required.
// This script implements a login form with "Remember Me" functionality using localStorage

// Get references to DOM elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#checkbox");
const existingButton = document.querySelector("#existing");

// Initially hide the "Login with Existing Credentials" button
existingButton.style.display = "none";

// Add a submit event listener to the login form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior which would refresh the page
  event.preventDefault();

  // Get the values entered by the user
  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberMeCheckbox.checked; // true or false

  // If "Remember Me" is checked, save credentials to localStorage
  // localStorage persists even after browser is closed, unlike sessionStorage
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If "Remember Me" is not checked, remove any previously stored credentials
    localStorage.removeItem("username", username);
    localStorage.removeItem("password", password);
  }

  // Alert the user that they've been logged in
  alert(`Logged in as ${username}`);

  // Check if we need to show the "Login with Existing Credentials" button
  showButton();

  // Reset the form fields
  form.reset();
});

// Function to show/hide the "Login with Existing Credentials" button
function showButton() {
  // Get stored credentials from localStorage
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  // If both username and password exist in localStorage, show the button
  if (username && password) {
    existingButton.style.display = "block";
  } else {
    // Otherwise, hide the button
    existingButton.style.display = "none";
  }
}

// Function to log in with saved credentials
function loginAsSaved() {
  // Get stored credentials from localStorage
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  // If both username and password exist, log the user in
  if (username && password) {
    alert(`Logged in as ${username}`);
  }
}

// Check if we should show the "Login with Existing Credentials" button when page loads
showButton();

// Add click event listener to the "Login with Existing Credentials" button
existingButton.addEventListener("click", loginAsSaved);