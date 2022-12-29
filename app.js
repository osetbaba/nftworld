const Togglebutton = document.getElementsByClassName("togglebtn")[0];
const navlinks = document.getElementsByClassName("navlinks")[0];

Togglebutton.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
