let modeButton = document.getElementById("header__screen-mode-button");
let modeButtonIcon = document.getElementById("header__mode-icon");
let body = document.body
let skillTags = document.querySelectorAll(".skill-tag");
let titleTags = document.querySelectorAll(".title-tag");
let buttons = document.querySelectorAll(".button");

modeButton.addEventListener("click", changeScreenMode)
modeButton.addEventListener("touch", changeScreenMode)

function changeScreenMode() {
    if (modeButtonIcon.src.includes("icons/sun-bold.svg")) {
        modeButtonIcon.src = "icons/moon-bold.svg"
        body.classList.toggle("lightmode")
        skillTags.forEach(tag => {
            tag.classList.toggle("lightmode")
        })
        titleTags.forEach(tag => {
            tag.classList.toggle("lightmode")
        })        
        buttons.forEach(tag => {
            tag.classList.toggle("lightmode")
        })           
    } else {
        modeButtonIcon.src = "icons/sun-bold.svg"
        body.classList.toggle("lightmode")
        skillTags.forEach(tag => {
            tag.classList.toggle("lightmode")
        })
        titleTags.forEach(tag => {
            tag.classList.toggle("lightmode")
        })
        buttons.forEach(tag => {
            tag.classList.toggle("lightmode")
        })  
    }
}
