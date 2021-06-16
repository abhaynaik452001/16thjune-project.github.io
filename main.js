const navtoggle = document.getElementsByClassName('nav-button-toggle')[0];
const navbarlinks = document.getElementsByClassName("navlinks")[0];

navtoggle.addEventListener("click", ()=>{
    navbarlinks.classList.toggle("active");
})