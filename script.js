const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector(".contact-form");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name")?.trim() || "Not provided";
  const email = formData.get("email")?.trim() || "Not provided";
  const message = formData.get("message")?.trim() || "I want to discuss a website project.";

  const whatsappNumber = "918208468798";
  const whatsappMessage = [
    "Hello, I want to discuss a website project.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message}`,
  ].join("\n");

  window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
});
