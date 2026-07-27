document.addEventListener("DOMContentLoaded", () => {
  // Automatically highlight current active menu item based on current URL
  const currentLocation = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentLocation) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Contact form submission mock handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Marker Request dispatched to the Continental Concierge.");
      contactForm.reset();
    });
  }
});
