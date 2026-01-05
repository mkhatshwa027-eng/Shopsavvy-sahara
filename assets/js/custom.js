// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobile-menu");
  const toggle = document.querySelector(".menu-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
});
