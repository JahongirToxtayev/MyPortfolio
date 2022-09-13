// ===================Style Switcher Toggler==================

const styleSwitcherToggle= document.querySelector('.style-switcher-toggler');
let styleSwitcher=document.querySelector('.style-switcher');
styleSwitcherToggle.addEventListener("click", ()=>{
    styleSwitcher.classList.toggle('open');
})

// =========Hide Switcher On scroll ===============

window.addEventListener("scroll", ()=>{
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open")
    }
})

//==========Theme Color=============

const alternateStyles=document.querySelectorAll(".alternate-color")

function setActiveStyle(color) {
    alternateStyles.forEach((style)=>{
        if (color==style.getAttribute('title')) {
            style.removeAttribute("disabled");
            if (color=="color-1") {
                document.querySelector(".home-img_image").setAttribute("src","images/image-color1.png")
            }
            if (color=="color-2") {
                document.querySelector(".home-img_image").setAttribute("src","images/image-color2.png")
            }
            if (color=="color-3") {
                document.querySelector(".home-img_image").setAttribute("src","images/image-color3.png")
            }
            if (color=="color-4") {
                document.querySelector(".home-img_image").setAttribute("src","images/image-color4.png")
            }
            if (color=="color-5") {
                document.querySelector(".home-img_image").setAttribute("src","images/image-color5.png")
            }
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

//============Day-Night============
let dayNight=document.querySelector(".day-night")

dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})


window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon")

    }
})