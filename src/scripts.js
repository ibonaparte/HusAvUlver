window.addEventListener("DOMContentLoaded", (event) => {
  const menuButton = document.getElementById("hamburger-menu-icon");

  menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    menuButton.classList.toggle("close");
  });
});
