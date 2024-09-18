window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");
const navBarLinks = document.querySelectorAll(".navbar a");
const projectsLayout = document.querySelectorAll(".projects-layout-section");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

navBarLinks.forEach((link) => {
  link.onclick = () => {
    navBar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  };
});

projectsLayout.forEach((link) => {
  link.addEventListener("click", function () {
    projectsLayout.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
