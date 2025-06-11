//JavaScript for mobile nav

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

 const scrollText = document.getElementById("scrollText");

  // Optional: Reset animation (e.g., on content update)
  function resetScrollAnimation() {
    scrollText.style.animation = 'none';
    scrollText.offsetHeight; // trigger reflow
    scrollText.style.animation = null;
  }