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
