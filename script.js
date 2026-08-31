const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function sendMessage(event) {
  event.preventDefault();
  document.getElementById("form-message").textContent =
    "Thank you! This demonstration form is ready to be connected to an email service or backend.";
}
