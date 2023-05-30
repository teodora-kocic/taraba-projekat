const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
const menuClose = document.querySelector(".menu-icon2");

menuIcon.addEventListener("click", function () {
  navBar.style.display = "block";
});

menuClose.addEventListener("click", function () {
  navBar.style.display = "none";
});
