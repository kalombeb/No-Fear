
const logo = document.getElementById('flavian-logo');
if (logo) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
  });
}



const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('#mobileMenu a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});





const navbar = document.querySelector('.navbar');
const scrollContainer = document.querySelector('.scroll-container');

let lastScrollTop = 0;

scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



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
