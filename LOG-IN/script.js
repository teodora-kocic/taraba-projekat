const checkbox = document.querySelector(".check-box");
const validation = document.querySelector(".validation");

const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
const menuClose = document.querySelector(".menu-icon2");

const btnLostPassword = document.querySelector(".btn-lost-password");
const divLostPassword = document.querySelector(".lost-password");
const mainPage = document.querySelector("main");
const btnReturnToLogin = document.querySelectorAll(".return");
const btnSend = document.querySelector(".password-recovery");
const input = document.querySelector(".lost-password form input");
const paragraph = document.querySelector(".lost-password-home p");

const btnResendActivation = document.querySelector(".btn-resend-activation");
const divResendActivation = document.querySelector(".resend-activation-email");
const btnSendActivation = document.querySelector(".send-activation");
const input2 = document.querySelector(".resend-activation-email form input");
const paragraph2 = document.querySelector(".resend-activation-email-home p");

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

validation.addEventListener("click", function () {
  validation.style.display = "none";
  checkbox.style.display = "block";
});

btnLostPassword.addEventListener("click", function () {
  divLostPassword.style.display = "flex";
  mainPage.style.display = "none";
});

btnResendActivation.addEventListener("click", function () {
  divResendActivation.style.display = "flex";
  mainPage.style.display = "none";
});

btnReturnToLogin.forEach((btn) => {
  btn.addEventListener("click", function () {
    divLostPassword.style.display = "none";
    divResendActivation.style.display = "none";
    mainPage.style.display = "flex";
  });
});

btnSend.addEventListener("click", function () {
  if (input.value != "") {
    btnSend.innerText = "Done!";
    btnSend.style.background = "#FFA039";
    btnSend.style.boxShadow = "inset -2px -2px 10px #FF7800";
    btnSend.style.border = "none";
    paragraph.innerText =
      "We will send you an email with a magic recovery link to reset your password.";
    btnSend.disabled = true;
  } else {
    paragraph.innerText =
      "Sorry, something went wrong, we can't send you link. Please, try again. ";
  }
});

btnSendActivation.addEventListener("click", function () {
  if (input2.value != "") {
    btnSendActivation.innerText = "Done!";
    paragraph2.innerText =
      "We will send you an email with a magic recovery link to reset your password.";
    btnSend.disabled = true;
  } else {
    paragraph2.innerText =
      "Sorry, something went wrong, we can't send you link. Please, try again. ";
  }
});
