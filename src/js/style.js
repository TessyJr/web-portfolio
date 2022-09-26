// hamburger menu
const menuIcon = document.querySelector("#menu-icon");
let menuStatus = 1;
menuIcon.addEventListener("click", () => {
  if (menuStatus == 1) {
    menuIcon.children[0].classList.add("translate-y-3");
    menuIcon.children[0].classList.add("rotate-45");
    menuIcon.children[1].classList.add("opacity-0");
    menuIcon.children[2].classList.add("-translate-y-3");
    menuIcon.children[2].classList.add("-rotate-45");
    menuStatus = 2;
  } else {
    menuIcon.children[0].classList.remove("translate-y-3");
    menuIcon.children[0].classList.remove("rotate-45");
    menuIcon.children[1].classList.remove("opacity-0");
    menuIcon.children[2].classList.remove("-translate-y-3");
    menuIcon.children[2].classList.remove("-rotate-45");
    menuStatus = 1;
  }
});

// Back to top button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("opacity-100");
    mybutton.classList.remove("pointer-events-none");
  } else {
    mybutton.classList.remove("opacity-100");
    mybutton.classList.add("pointer-events-none");
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
