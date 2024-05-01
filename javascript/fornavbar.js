const hamburgerElement = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");
const Xsign = document.querySelector(".x-sign");
const navbarPhoneElement = document.querySelector(".forNavbar-phone");
const hamburge1 = document.querySelector(".hamburge1");
// Add a click event listener to the hamburger element
hamburgerElement.addEventListener("click", () => {
  navbarPhoneElement.classList.toggle("show");
  hamburgerElement.classList.toggle("active");
});

Xsign.addEventListener("click", () => {
  navbarPhoneElement.classList.toggle("show");
  if (window.scrollY < 100) {
    hamburgerElement.classList.toggle("active");
    hamburgerElement_navBar.style.right = "-300px";
  } else {
    hamburgerElement_navBar.style.right = "10px";
  }
});
const hamburgerElement_navBar = document.querySelector(".hamburge1");
hamburgerElement_navBar.addEventListener("click", () => {
  navbarPhoneElement.classList.toggle("show");
  hamburgerElement.classList.toggle("active");
  hamburgerElement_navBar.style.right = "-200px";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Adjust this value as needed
    hamburge1.style.right = "10px";
  } else {
    hamburge1.style.right = "-200px";
  }
});
