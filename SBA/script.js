// js/script.js
document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();

  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const details = `Service: ${service}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}`;
  
  document.getElementById("confirmDetails").innerText = details;
  document.getElementById("confirmation").classList.remove("hidden");

  // Save to localStorage (simple simulation of database)
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push({service, date, time, name, phone});
  localStorage.setItem("appointments", JSON.stringify(appointments));
});
