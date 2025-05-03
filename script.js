document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const submission = { name, email, message, timestamp: new Date().toISOString() };

  let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push(submission);
  localStorage.setItem("registrations", JSON.stringify(registrations));

  document.getElementById("successMsg").innerText = "Thanks for registering!";
  document.getElementById("contactForm").reset();
});

// Optional scroll to form
document.getElementById("registerBtn").addEventListener("click", () => {
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
});





