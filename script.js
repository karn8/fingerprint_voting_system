document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const aadhaarNumber = document.getElementById("aadhaarNumber").value;
    const dob = document.getElementById("dob").value;
    const otp = document.getElementById("otp").value;

    // Simulate validation or send data to server
    console.log("Login Attempt:", aadhaarNumber, dob, otp);
    // Redirect to another page or show error/message based on response
    alert("Login submitted. Implement validation and redirection.");
  });
