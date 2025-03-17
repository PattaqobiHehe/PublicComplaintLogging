document.getElementById("complaintForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate file size (max 2MB)
    const photoInput = document.getElementById("photo");
    if (photoInput.files.length > 0) {
      const fileSize = photoInput.files[0].size / 1024 / 1024; // Convert to MB
      if (fileSize > 2) {
        alert("File size must be less than 2MB.");
        return;
      }
    }
  
    // If all validations pass, submit the form
    alert("Complaint submitted successfully!");
    // Uncomment the following line to submit the form to the server
    // this.submit();
  });
// Function to check if passwords match
document.getElementById("checkPasswordButton").addEventListener("click", function () {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordMatchIcon = document.getElementById("passwordMatchIcon");

  if (password === confirmPassword && password !== "") {
    passwordMatchIcon.style.display = "inline";
    passwordMatchIcon.textContent = "✅"; // Show checkmark
  } else {
    passwordMatchIcon.style.display = "inline";
    passwordMatchIcon.textContent = "❌"; // Show cross mark
    alert("Passwords do not match.");
  }
});
  
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      // Redirect to dashboard.html
      window.location.href = "dashboard.html";
  
      // Optionally, you can pass a query parameter to show the success message
      window.location.href = "dashboard.html?success=true";
    }, 1000); // Simulate a delay for form submission
  }