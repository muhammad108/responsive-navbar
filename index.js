const mobileNav = document.querySelector(".menu-btn")
const navHeader = document.querySelector(".header")

const toggleButton = ()=>{
   
    navHeader.classList.toggle("active")
}
mobileNav.addEventListener("click", () => toggleButton() )