// js/auth.js
const users = [
  {username: "admin", password: "admin123", role: "Admin"},
  {username: "clerk", password: "clerk123", role: "Clerk"},
  {username: "citizen", password: "citizen123", role: "Citizen"}
];

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);

  if(user){
    localStorage.setItem("currentUser", JSON.stringify(user));
    document.getElementById("loginMessage").innerText = `Welcome ${user.role}! Redirecting...`;
    setTimeout(() => {
      if(user.role === "Citizen") window.location.href = "index.html";
      else window.location.href = "dashboard.html";
    }, 1000);
  } else {
    document.getElementById("loginMessage").innerText = "Invalid credentials!";
  }
});
