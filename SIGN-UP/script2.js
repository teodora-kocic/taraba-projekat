const btnCreateAccount = document.querySelector(".create-account");
const checkbox = document.querySelector(".check-box");
const checkboxError = document.querySelector(".check-box-error");
const validation = document.querySelector(".validation");
const errorParagraph = document.querySelector(".checkbox p");

const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
const menuClose = document.querySelector(".menu-icon2");

menuIcon.addEventListener("click", function () {
  navBar.style.display = "block";
});

menuClose.addEventListener("click", function () {
  navBar.style.display = "none";
});

validation.style.display = "none";

checkbox.addEventListener("click", function () {
  checkbox.style.display = "none";
  validation.style.display = "block";
});

checkboxError.addEventListener("click", function () {
  checkboxError.style.display = "none";
  validation.style.display = "block";
});

validation.addEventListener("click", function () {
  validation.style.display = "none";
  checkbox.style.display = "block";
});

btnCreateAccount.addEventListener("click", function () {
  if (validation.style.display === "none") {
    errorParagraph.style.color = "#FF1934";
    checkbox.style.display = "none";
    checkboxError.style.display = "block";
  } else {
    errorParagraph.style.color = "#e6e6e6";
    checkboxError.style.display = "none";
  }
});
