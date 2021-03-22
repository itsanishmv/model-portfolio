const slider = document.querySelector(".courosel-slide")
const img = document.querySelectorAll(".courosel-slide img")

const prevBtn = document.querySelector("#prevbtn")
const nextBtn = document.querySelector("#nextbtn")

let counter = 1;
console.log(img)

const size = img[0].clientWidth
slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener("click", () => {
    slider.style.transition = 'transform 0.5s'
    counter++
    console.log(counter)
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
})
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter--
    console.log(counter)
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
})
slider.addEventListener("transitionend", () => {
    console.log("fired")
    if (img[counter].id === 'lastclone') {
        img.style.transition ="none"
        counter = img.length - counter
        slider.style.transform ='translateX(' + (-size * counter) + 'px)'
    }
})
    if (img[counter].id === 'firstclone') {
        img.style.transition ="none"
        counter = img.length - 2
        slider.style.transform ='translateX(' + (-size * counter) + 'px)'
    }