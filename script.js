const sidebar = document.querySelector("aside");

function openNavbar() {
  sidebar.classList.add("translate-x-0");
  sidebar.classList.remove("-translate-y-full");
}

function closeNavbar() {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-y-full");
}

var lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("-translate-y-full");
  } else {
    navbar.classList.remove("-translate-y-full");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
