const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

function toggleNavbar() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");

    nav1.classList.remove("slide-out-1");
    nav1.classList.add("slide-in-1");

    nav2.classList.remove("slide-out-2");
    nav2.classList.add("slide-in-2");

    nav3.classList.remove("slide-out-3");
    nav3.classList.add("slide-in-3");

    nav4.classList.remove("slide-out-4");
    nav4.classList.add("slide-in-4");

    nav5.classList.remove("slide-out-5");
    nav5.classList.add("slide-in-5");
  } else {
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");

    nav1.classList.add("slide-out-1");
    nav1.classList.remove("slide-in-1");

    nav2.classList.add("slide-out-2");
    nav2.classList.remove("slide-in-2");

    nav3.classList.add("slide-out-3");
    nav3.classList.remove("slide-in-3");

    nav4.classList.add("slide-out-4");
    nav4.classList.remove("slide-in-4");

    nav5.classList.add("slide-out-5");
    nav5.classList.remove("slide-in-5");
  }
}

// Event Listeners

menuBars.addEventListener("click", toggleNavbar);
nav1.addEventListener("click", toggleNavbar);
nav2.addEventListener("click", toggleNavbar);
nav3.addEventListener("click", toggleNavbar);
nav5.addEventListener("click", toggleNavbar);
