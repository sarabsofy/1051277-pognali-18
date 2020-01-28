var navMain = document.querySelector(".main-nav");
var headerToggle = document.querySelector(".site-header__toggle");
var header = document.querySelector(".site-header");
var popupRate = document.querySelector(".business");
var btnRate = document.querySelector(".profile__button");
var closeRate = document.querySelector(".business__button");


header.classList.remove("site-header--opened");
navMain.classList.add("modal-close");

headerToggle.addEventListener("click", function() {
  if (navMain.classList.contains("modal-close")) {
    header.classList.add("site-header--active");
    navMain.classList.remove("modal-close");
    navMain.classList.add("modal-show");
  } else {
    header.classList.remove("site-header--active");
    navMain.classList.add("modal-close");
    navMain.classList.remove("modal-show");
  }
});

btnRate.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupRate.classList.add("modal-show");
});

closeRate.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupRate.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupRate.classList.contains("modal-show")) {
      popupRate.classList.remove("modal-show");
    }
  }
});
