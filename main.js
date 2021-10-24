const btn = document.querySelector(".ham");
const navBar = document.querySelector(".astra");

btn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
