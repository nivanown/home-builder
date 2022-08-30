// MENU
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const nav = document.querySelector(".mobile-menu");
burger.addEventListener("click", () => {
    //button burger
    burger.classList.toggle("active");
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        nav.classList.add("hide");
        body.style.overflow = "initial";
    } else {
        nav.classList.remove("hide");
        nav.classList.add("show");
        body.style.overflow = "hidden";
    }
});