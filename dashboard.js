document.addEventListener("DOMContentLoaded", function () {
    // Example data
    const complaints = [
      { id: 1, title: "Pothole on Main St", status: "Pending" },
      { id: 2, title: "Garbage not collected", status: "Resolved" },
    ];
  
    const activities = [
      { id: 1, text: "Your complaint 'Pothole on Main St' has been updated." },
      { id: 2, text: "New comment on your complaint 'Garbage not collected'." },
    ];
  
    const notifications = [
      { id: 1, text: "New system update available." },
      { id: 2, text: "Reminder: Submit your monthly feedback." },
    ];
  
    
    // Show the My Profile section by default when the page loads
    window.onload = function () {
      showSection('profile'); // Show the My Profile section by default
    };



    // Populate Complaints
    const complaintsList = document.getElementById("complaintsList");
    complaints.forEach((complaint) => {
      const complaintItem = document.createElement("div");
      complaintItem.className = "complaint-item";
      complaintItem.innerHTML = `<strong>${complaint.title}</strong> - ${complaint.status}`;
      complaintsList.appendChild(complaintItem);
    });
  
    // Populate Activities
    const activityFeed = document.getElementById("activityFeed");
    activities.forEach((activity) => {
      const activityItem = document.createElement("div");
      activityItem.className = "activity-item";
      activityItem.textContent = activity.text;
      activityFeed.appendChild(activityItem);
    });
  
    // Populate Notifications
    const notificationsList = document.getElementById("notificationsList");
    notifications.forEach((notification) => {
      const notificationItem = document.createElement("div");
      notificationItem.className = "notification-item";
      notificationItem.textContent = notification.text;
      notificationsList.appendChild(notificationItem);
    });
  
    // Event Listeners
    document.getElementById("newComplaintBtn").addEventListener("click", () => {
      alert("Redirect to new complaint form");
    });
  
    document.getElementById("viewAllComplaintsBtn").addEventListener("click", () => {
      alert("Redirect to all complaints page");
    });
  
    document.getElementById("feedBtn").addEventListener("click", () => {
      alert("Redirect to feed page");
    });
  
    document.getElementById("logoutBtn").addEventListener("click", () => {
      alert("Logging out...");
      // Redirect to login page
    });
  });

// Function to toggle the status section
function toggleStatusSection() {
  const statusSection = document.getElementById('statusSection');
  if (statusSection.style.display === 'none') {
      statusSection.style.display = 'block';
  } else {
      statusSection.style.display = 'none';
  }
}
// Function to toggle the profile info
function toggleProfileInfo() {
  const profileInfo = document.getElementById('profileInfo');
  const myInfoButton = document.querySelector('.activity-item[onclick="toggleProfileInfo()"]');
  
  profileInfo.classList.toggle('show');
  myInfoButton.classList.toggle('expanded');
}

// Function to toggle the status section
function toggleStatusSection() {
  const statusSection = document.getElementById('statusSection');
  const statusButton = document.querySelector('.activity-item[onclick="toggleStatusSection()"]');
  
  statusSection.style.display = statusSection.style.display === 'none' ? 'block' : 'none';
  statusButton.classList.toggle('expanded');
}



// Function to toggle the password change form
function togglePasswordChange() {
  const passwordChangeForm = document.getElementById('passwordChangeForm');
  const passwordChangeButton = document.querySelector('.activity-item[onclick="togglePasswordChange()"]');
  
  // Toggle form visibility
  passwordChangeForm.style.display = passwordChangeForm.style.display === 'none' ? 'block' : 'none';
  
  // Toggle chevron rotation
  passwordChangeButton.classList.toggle('expanded');
}


// Function to handle password change form submission
document.getElementById('passwordForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate inputs
  if (newPassword !== confirmPassword) {
    alert('New password and confirm password do not match.');
    return;
  }

  if (newPassword.length < 6) {
    alert('New password must be at least 6 characters long.');
    return;
  }

  // Simulate password change (replace with actual API call)
  console.log('Old Password:', oldPassword);
  console.log('New Password:', newPassword);

  alert('Password changed successfully!');
  document.getElementById('passwordForm').reset(); // Reset form
  togglePasswordChange(); // Hide form after submission
});
