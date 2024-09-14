function whenClicked(nav) {
  const navSelector = document.querySelector(`.${nav}`);
  if (navSelector) {
    navSelector.classList.add("nav_underline");
    console.log("Success");
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
