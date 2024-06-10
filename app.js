let menu = document.querySelector(".menu");
let links = document.querySelector(".desktop")
let close = document.querySelector(".close")

menu.addEventListener("click", ()=>{
    links.style.display = "block"
    menu.style.display = "none"
    close.style.display = "block"
})

close.addEventListener("click", ()=>{
    links.style.display = "none"
    close.style.display = "none"
    menu.style.display = "block"
})