const hamburger = document.querySelector("#toggle-Btn");
const navMenu = document.querySelector("nav");
const hamburger1 = document.querySelector(".change");
hamburger.onclick = function () {
    navMenu.classList.toggle("active");
    if(navMenu.classList.contains("active")){
        hamburger.src = "assets/images/icon-menu-close.svg";
        console.log(Math.random());

    }
    else {
        hamburger.src = "assets/images/icon-menu.svg";  
    }
}
