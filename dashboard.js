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

// Function to toggle username change section
function toggleUsernameChange() {
  const usernameChangeForm = document.getElementById('usernameChangeForm');
  if (usernameChangeForm.style.display === 'none') {
      usernameChangeForm.style.display = 'block';
  } else {
      usernameChangeForm.style.display = 'none';
  }
}

// Handle username form submission
document.getElementById('usernameForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  if (newUsername) {
      // Update the username in the profile section
      document.querySelector('.profile-details p:nth-child(2) strong').nextSibling.textContent = newUsername;
      // Show success message (optional)
      alert('Username updated successfully!');
      // Hide the form
      document.getElementById('usernameChangeForm').style.display = 'none';
  }
});

// Function to toggle username change section
function toggleAddressChange() {
  const addressChangeForm = document.getElementById('addressChangeForm');
  if (addressChangeForm.style.display === 'none') {
    addressChangeForm.style.display = 'block';
  } else {
    addressChangeForm.style.display = 'none';
  }
}

// Handle address form submission
document.getElementById('addressForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newAddress = document.getElementById('newAddress').value;
  if (newAddress) {
      // Update the address in the profile section
      document.querySelector('.profile-details p:nth-child(2) strong').nextSibling.textContent = newAddress;
      // Show success message (optional)
      alert('Address updated successfully!');
      // Hide the form
      document.getElementById('addressChangeForm').style.display = 'none';
  }
});

// Function to toggle phone number change section
function togglePhNumberChange() {
  const numberChangeForm = document.getElementById('numberChangeForm');
  if (numberChangeForm.style.display === 'none') {
    numberChangeForm.style.display = 'block';
  } else {
    numberChangeForm.style.display = 'none';
  }
}

// Handle address form submission
document.getElementById('numberForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newNumber = document.getElementById('newNumber').value;
  if (newNumber) {
      // Update the phone number in the profile section
      document.querySelector('.profile-details p:nth-child(2) strong').nextSibling.textContent = newNumber;
      // Show success message (optional)
      alert('Address updated successfully!');
      // Hide the form
      document.getElementById('numberChangeForm').style.display = 'none';
  }
});

function previewImage(event) {
  const reader = new FileReader();
  const preview = document.getElementById('profilePicturePreview');
  reader.onload = function() {
      preview.src = reader.result;
      preview.style.display = 'block'; // Show the image
  }
  reader.readAsDataURL(event.target.files[0]);
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

// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const toggle = document.getElementById('toggle');
  
  // Toggle the dark theme class
  body.classList.toggle('dark-theme');
  
  // Force redraw for elements that might not update immediately
  document.querySelectorAll('h1, h2, h3, h4, label').forEach(el => {
      el.style.display = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.display = '';
  });
  
  // Update the toggle state
  toggle.checked = body.classList.contains('dark-theme');
  
  // Save preference to localStorage
  localStorage.setItem('darkTheme', body.classList.contains('dark-theme'));
}

// Initialize theme from localStorage
function initializeTheme() {
  const darkTheme = localStorage.getItem('darkTheme') === 'true';
  const body = document.body;
  const toggle = document.getElementById('toggle');
  
  if (darkTheme) {
      body.classList.add('dark-theme');
      toggle.checked = true;
  }
}

// Call initializeTheme when the page loads
document.addEventListener('DOMContentLoaded', initializeTheme);

// Add event listener to the toggle checkbox
document.getElementById('toggle').addEventListener('change', toggleTheme);

// Single toggleReportBug function definition
function toggleReportBug(e) {
  // Stop event from bubbling if this was triggered by a child element
  if (e) e.stopPropagation();
  
  const form = document.getElementById('ReportBugForm');
  const chevron = document.querySelector('.activity-item[onclick="toggleReportBug(event)"] .fa-chevron-down');
  
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  chevron.style.transform = form.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
}

// Bug Report Functionality
document.addEventListener('DOMContentLoaded', function() {
  const openBugReportModal = document.getElementById('openBugReportModal');
  const bugReportModal = document.getElementById('bugReportModal');
  const closeBugModal = document.querySelector('.close-bug-modal');
  const cancelBugReport = document.getElementById('cancelBugReport');
  const bugReportForm = document.getElementById('bugReportForm');
  const bugDescription = document.getElementById('bugDescription');
  const bugReportMessage = document.getElementById('bugReportMessage');

  // Only keep this one handler for the blue button
  openBugReportModal.addEventListener('click', function(e) {
    e.stopPropagation();
    bugReportModal.style.display = 'block';
  });

  // Remove the duplicate bugReportBtn click handler since we're using the inline onclick

  // Close modal handlers
  closeBugModal.addEventListener('click', function() {
    bugReportModal.style.display = 'none';
    resetBugReportForm();
  });

  cancelBugReport.addEventListener('click', function() {
    bugReportModal.style.display = 'none';
    resetBugReportForm();
  });

  window.addEventListener('click', function(e) {
    if (e.target === bugReportModal) {
      bugReportModal.style.display = 'none';
      resetBugReportForm();
    }
  });

  // Form submission
  bugReportForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    bugReportMessage.textContent = '';
    bugReportMessage.className = '';
    bugReportMessage.style.display = 'none';
    
    if (!bugDescription.value.trim()) {
      showBugMessage('Please fill out the description field', 'error');
      return;
    }
    
    if (bugDescription.value.trim().length < 20) {
      showBugMessage('Please provide more details (at least 20 characters)', 'error');
      return;
    }
    
    showBugMessage('Your bug report has been submitted successfully! We will review it shortly.', 'success');
    
    setTimeout(function() {
      bugReportModal.style.display = 'none';
      resetBugReportForm();
      
      const successMessage = document.getElementById('successMessage');
      const messageText = document.querySelector('.message-text');
      const subText = document.querySelector('.sub-text');
      
      messageText.textContent = 'Bug Report Submitted';
      subText.textContent = 'Thank you for helping us improve!';
      successMessage.style.display = 'flex';
      
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 5000);
    }, 3000);
  });

  function showBugMessage(text, type) {
    bugReportMessage.textContent = text;
    bugReportMessage.className = type;
    bugReportMessage.style.display = 'block';
  }

  function resetBugReportForm() {
    bugDescription.value = '';
    bugReportMessage.textContent = '';
    bugReportMessage.className = '';
    bugReportMessage.style.display = 'none';
  }
});


// Function to toggle notification preferences
function toggleNotificationPreference() {
  const form = document.getElementById('notificationPreferenceForm');
  const chevron = document.querySelector('.activity-item[onclick="toggleNotificationPreference()"] .fa-chevron-down');
  
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  chevron.style.transform = form.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
  
  // Load saved preferences when opening
  if (form.style.display === 'block') {
      loadNotificationPreferences();
  }
}

// Load saved notification preferences
function loadNotificationPreferences() {
  const prefs = JSON.parse(localStorage.getItem('notificationPreferences')) || {};
  
  // Set toggle states from localStorage or default to checked
  document.getElementById('emailNotifications').checked = prefs.emailNotifications !== false;
  document.getElementById('emailCommentNotifications').checked = prefs.emailCommentNotifications !== false;
  document.getElementById('emailStatusNotifications').checked = prefs.emailStatusNotifications !== false;
  document.getElementById('emailWeeklyDigest').checked = prefs.emailWeeklyDigest || false;
  
  document.getElementById('pushNotifications').checked = prefs.pushNotifications !== false;
  document.getElementById('pushUrgentNotifications').checked = prefs.pushUrgentNotifications !== false;
  document.getElementById('pushMessageNotifications').checked = prefs.pushMessageNotifications !== false;
    
  // Toggle sub-options based on main toggle
  toggleSubOptions('emailNotifications', 'emailSubOptions');
  toggleSubOptions('pushNotifications', 'pushSubOptions');
}

// Save notification preferences
function saveNotificationPreferences() {
  const prefs = {
      emailNotifications: document.getElementById('emailNotifications').checked,
      emailCommentNotifications: document.getElementById('emailCommentNotifications').checked,
      emailStatusNotifications: document.getElementById('emailStatusNotifications').checked,
      emailWeeklyDigest: document.getElementById('emailWeeklyDigest').checked,
      
      pushNotifications: document.getElementById('pushNotifications').checked,
      pushUrgentNotifications: document.getElementById('pushUrgentNotifications').checked,
      pushMessageNotifications: document.getElementById('pushMessageNotifications').checked,
      
      smsCriticalNotifications: document.getElementById('smsCriticalNotifications').checked
  };
  
  localStorage.setItem('notificationPreferences', JSON.stringify(prefs));
  
  // Show success message
  const successMessage = document.getElementById('successMessage');
  const messageText = document.querySelector('.message-text');
  const subText = document.querySelector('.sub-text');
  
  messageText.textContent = 'Preferences Saved';
  subText.textContent = 'Your notification preferences have been updated';
  successMessage.style.display = 'flex';
  
  setTimeout(function() {
      successMessage.style.display = 'none';
  }, 3000);
}

// Toggle sub-options visibility based on main toggle
function toggleSubOptions(mainToggleId, subOptionsId) {
  const mainToggle = document.getElementById(mainToggleId);
  const subOptions = document.getElementById(subOptionsId);
  
  if (mainToggle.checked) {
      subOptions.style.display = 'block';
  } else {
      subOptions.style.display = 'none';
  }
}

// Add event listeners for main toggles
document.getElementById('emailNotifications').addEventListener('change', function() {
  toggleSubOptions('emailNotifications', 'emailSubOptions');
});

document.getElementById('pushNotifications').addEventListener('change', function() {
  toggleSubOptions('pushNotifications', 'pushSubOptions');
});

// Function to toggle privacy settings section
function togglePrivacyChanges() {
    const form = document.getElementById('privacySettingsForm');
    const chevron = document.querySelector('.activity-item[onclick="togglePrivacyChanges()"] .fa-chevron-down');
    
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    chevron.style.transform = form.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    
    // Load saved settings when opening
    if (form.style.display === 'block') {
        loadPrivacySettings();
    }
}

// Toggle individual privacy sections
function togglePrivacySection(sectionId) {
    const section = document.getElementById(sectionId + 'Section').parentElement;
    section.classList.toggle('active');
}

// Load saved privacy settings
function loadPrivacySettings() {
    const settings = JSON.parse(localStorage.getItem('privacySettings')) || {};
    
    // Set toggle states from localStorage or defaults
    document.getElementById('publicProfile').checked = settings.publicProfile || false;
    document.getElementById('showEmail').checked = settings.showEmail || false;
    document.getElementById('showPhone').checked = settings.showPhone || false;
    document.getElementById('showAddress').checked = settings.showAddress || false;
    
    document.getElementById('showComplaints').checked = settings.showComplaints !== false;
    document.getElementById('showComments').checked = settings.showComments !== false;
    document.getElementById('showLikes').checked = settings.showLikes || false;
    
    document.getElementById('allowAnalytics').checked = settings.allowAnalytics || false;
    document.getElementById('allowPersonalizedAds').checked = settings.allowPersonalizedAds || false;
    
    document.getElementById('searchEngineVisibility').checked = settings.searchEngineVisibility || false;
    
    document.getElementById('twoFactorAuth').checked = settings.twoFactorAuth || false;
}

// Save privacy settings
function savePrivacySettings() {
    const settings = {
        publicProfile: document.getElementById('publicProfile').checked,
        showEmail: document.getElementById('showEmail').checked,
        showPhone: document.getElementById('showPhone').checked,
        showAddress: document.getElementById('showAddress').checked,
        
        showComplaints: document.getElementById('showComplaints').checked,
        showComments: document.getElementById('showComments').checked,
        showLikes: document.getElementById('showLikes').checked,
        
        allowAnalytics: document.getElementById('allowAnalytics').checked,
        allowPersonalizedAds: document.getElementById('allowPersonalizedAds').checked,
        
        searchEngineVisibility: document.getElementById('searchEngineVisibility').checked,
        
        twoFactorAuth: document.getElementById('twoFactorAuth').checked
    };
    
    localStorage.setItem('privacySettings', JSON.stringify(settings));
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    const messageText = document.querySelector('.message-text');
    const subText = document.querySelector('.sub-text');
    
    messageText.textContent = 'Privacy Settings Saved';
    subText.textContent = 'Your privacy preferences have been updated';
    successMessage.style.display = 'flex';
    
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}
