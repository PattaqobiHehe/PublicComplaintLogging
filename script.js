// Google Sign-In and Form Validation Script
function handleCredentialResponse(response) {
  if (devMode) {
    // Bypass actual Google auth in dev mode
    console.log("[DEV MODE] Bypassing Google authentication");
    const testUser = {
      email: "name_123",
      name: "Test User",
      picture: ""
    };
    
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('googleUsername').placeholder = testUser.email;
    showUsernameModal();
    return;
  }

  try {
    const responsePayload = JSON.parse(atob(response.credential.split('.')[1]));
    console.log('Google User Info:', responsePayload);
    
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('googleUsername').placeholder = responsePayload.email || 'Choose username';
    showUsernameModal();
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    alert('Google Sign-In failed. Please try again.');
  }
}

function initGoogleSignIn() {
  if (devMode) {
    console.log("[DEV MODE] Skipping Google Sign-In initialization");
    // Set up click handler for dev mode bypass
    document.querySelector('.button-g').addEventListener('click', () => {
      console.log("[DEV MODE] Simulating Google Sign-In");
      handleCredentialResponse({}); // Pass empty response
    });
    return;
  }

  google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID', // REPLACE WITH YOUR ACTUAL CLIENT ID
    callback: handleCredentialResponse,
    ux_mode: 'popup'
  });

  // Create a hidden div for Google's button
  const googleSignInDiv = document.createElement('div');
  googleSignInDiv.style.display = 'none';
  document.body.appendChild(googleSignInDiv);

  // Render Google's button in the hidden div
  google.accounts.id.renderButton(googleSignInDiv, { 
    type: 'icon', 
    size: 'large',
    theme: 'outline'
  });

  // Attach click handler to your custom button
  document.querySelector('.button-g').addEventListener('click', () => {
    // Trigger click on Google's hidden button
    const googleButton = googleSignInDiv.querySelector('div[role=button]');
    if (googleButton) 
      googleButton.click();
    
  });
}

window.onload = function() {
  // Show dev mode notice
  if (devMode) {
    document.getElementById('dev-mode-notice').style.display = 'block';
  }
  
  // Initialize Google Sign-In (will handle dev mode internally)
  if (window.google || devMode) {
    initGoogleSignIn();
  } else {
    setTimeout(initGoogleSignIn, 500);
  }
  
  // Initialize form validation
  initFormValidation();
};
function initFormValidation() {
  const validationConfig = {
    fullName: {
      pattern: /^[A-Za-z\s]{1,32}$/,
      message: "Full name should contain only letters and spaces (max 32 characters)",
    },
    username: {
      pattern: /^[a-zA-Z0-9]{1,32}$/,
      message: "Username should contain only letters and numbers (max 32 characters)",
    },
    email: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
      message: "Please enter a valid email address",
    },
    phoneNumber: {
      pattern: /^[6-9][0-9]{9}$/,
      message: "Phone number must start with 6-9 and have 10 digits",
    },
    houseNumber: {
      pattern: /^.+$/,
      message: "Please enter a valid house number",
    },
    address: {
      pattern: /^.+$/,
      message: "Please enter a valid address",
    },
    password: {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/,
      message: "Password must be at least 6 characters with an uppercase, lowercase and number.",
    },
  };

  // Add validation to all required inputs
  document.querySelectorAll("input[required], select[required], textarea[required]").forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") return;

    input.addEventListener("blur", () => validateInput(input, validationConfig));
    input.addEventListener("input", () => clearError(input));
  });

  // Form submission handler
  document.getElementById("registrationForm").addEventListener("submit", function(e) {
    if (!validateForm(validationConfig)) {
      e.preventDefault();
    }
  });
}

function validateForm(validationConfig) {
  let isValid = true;
  
  // Validate all inputs
  document.querySelectorAll("input[required]").forEach(input => {
    if (input.type !== "radio" && input.type !== "checkbox") {
      if (!validateInput(input, validationConfig)) isValid = false;
    }
  });

  // Validate gender selection
  if (!document.querySelector('input[name="radio-group"]:checked')) {
    showError(document.querySelector('.gender-details-box'), "Please select a gender");
    isValid = false;
  }

  // Validate reCAPTCHA
  if (!grecaptcha.getResponse()) {
    showError(document.querySelector('.g-recaptcha'), "Please complete the reCAPTCHA");
    isValid = false;
  }


  return isValid;
}

function validateInput(input, config) {
  if (!input.value && !input.hasAttribute("required")) return true;

  const rules = config[input.id] || config[input.name];
  if (rules && !rules.pattern.test(input.value)) {
    showError(input, rules.message);
    return false;
  }

  clearError(input);
  return true;
}

function showError(element, message) {
  clearError(element);
  const errorMsg = document.createElement("div");
  errorMsg.className = "error-message";
  errorMsg.textContent = message;
  element.insertAdjacentElement("afterend", errorMsg);
  element.classList.add("invalid");
}

function clearError(element) {
  const errorMsg = element.nextElementSibling;
  if (errorMsg?.classList.contains("error-message")) {
    errorMsg.remove();
  }
  element.classList.remove("invalid");
}

// Modal functions
function showUsernameModal() {
  document.getElementById('usernameModal').style.display = 'flex';
}

function closeUsernameModal() {
  document.getElementById('usernameModal').style.display = 'none';
}

function submitGoogleRegistration() {
  const usernameInput = document.getElementById('googleUsername');
  if (!usernameInput.value.trim()) {
    showError(usernameInput, "Username is required");
    return;
  }
  
  if (!/^[a-zA-Z0-9]{1,32}$/.test(usernameInput.value)) {
    showError(usernameInput, "Only letters and numbers allowed (max 32 chars)");
    return;
  }

  // In production: Send to backend
  alert(`Account created with username: ${usernameInput.value}`);
  window.location.href = '/welcome';
}

