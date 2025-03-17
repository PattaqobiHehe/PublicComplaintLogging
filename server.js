require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());

// Use environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

// Your server logic here
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// Endpoint to handle login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Replace this with your actual user authentication logic
  // For example, check if the email and password match a user in the database
  if (email === "user@example.com" && password === "password123") {
    res.send({ success: true, message: "Login successful!" });
  } else {
    res.status(401).send({ success: false, message: "Invalid email or password." });
  }
});

// Example data (replace with database queries)
const complaints = [
  {
    id: 1,
    user: "user1@example.com",
    title: "Garbage Overflow",
    description: "Garbage is overflowing in my area.",
    status: "Pending",
    image: "https://example.com/garbage.jpg",
  },
  {
    id: 2,
    user: "user2@example.com",
    title: "Broken Streetlight",
    description: "Streetlight near my house is broken.",
    status: "Resolved",
    image: "https://example.com/streetlight.jpg",
  },
];

// Endpoint to fetch user's complaints
app.get("/user-complaints", (req, res) => {
  const userEmail = "user1@example.com"; // Replace with actual user email from session/token
  const userComplaints = complaints.filter((complaint) => complaint.user === userEmail);
  res.send({ success: true, complaints: userComplaints });
});

// Endpoint to fetch complaints feed
app.get("/complaints-feed", (req, res) => {
  res.send({ success: true, complaints });
});