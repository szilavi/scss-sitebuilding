const navbar = document.querySelector(".navbar");

const brand = document.querySelector(".navbar__brand");

window.addEventListener("scroll", changeNavBar);

function changeNavBar() {
  if (window.scrollY !== 0) {
    navbar.classList.add("navbar--bgWhite");
    navbar.classList.add("navbar--fixedTop");
  } else {
    navbar.classList.remove("navbar--bgWhite");
    navbar.classList.remove("navbar--fixedTop");
  }
}

// navMenu.forEach((i) => {
//   i.addEventListener("mouseover", changeColorWhite);
//   i.addEventListener("mouseleave", changeColorGrey);
// });

function changeColorWhite(e) {
  if (window.scrollY === 0) {
    e.style.color = "#ffffff";
  }
}

function changeColorGrey(e) {
  e.style.color = "#a6a6a6";
}

function changeColorGreyBrand(e) {
  if (window.scrollY === 0) {
    e.style.color = "#ffffff";
  }
}

function changeColorYellowBrand(e) {
  e.style.color = "#ffcd01";
}

// BS code

const collapse = document.querySelector(".navbar__toggler");
const navBar = document.querySelector(".navbar__collapse");

collapse.addEventListener("click", showMenu);

function showMenu() {
  navBar.classList.toggle("show");
}

// MODAL

//A szöveget csak azért nem állítottam be, hogy megnézze a modal title textContentjét (ami alapján más lenne a felirat), mert mindegyiknél
//lorem van.

const btnModal = document.querySelectorAll(".btn__modal");
const modalShow = document.querySelector(".modal__background");
const modalHide = document.querySelector(".modal__window__X");
const modalHide2 = document.querySelector(".btn__success");
const modalWindow = document.querySelector("body > div > div");
const modalBackground = document.querySelector("body > div");
const title = document.querySelector(
  "body > div > div > div.modal__window__text > h2"
);

btnModal.forEach((i) => {
  i.addEventListener("click", function () {
    title.textContent = i.textContent;
    modalShow.classList.add("modal__background--active");
  });
});

modalHide.addEventListener("click", function () {
  modalShow.classList.remove("modal__background--active");
});

modalHide2.addEventListener("click", function () {
  modalShow.classList.remove("modal__background--active");
});
