function buyTicket() {
  alert("Redirecting to ticket purchase...");
  // window.location.href = 'https://yourticketpage.com';
}

document.getElementById("ticketBtn").addEventListener("click", buyTicket);

// Countdown Timer
function updateCountdown() {
  const launchDate = new Date("2025-08-09T18:30:00+02:00"); // Lusaka time
  const now = new Date();

  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Event has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
