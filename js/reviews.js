const leftArrow = document.querySelector(".leftArrow")
const rightArrow = document.querySelector(".rightArrow")
const blocks = document.querySelectorAll('.reviews-block')

let currentSlide = 0;

function changeSlide(slide){     
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.remove('active')
        }

        if (slide < 0) {
            slide = currentSlide = blocks.length - 1;
        }

        if (slide > blocks.length - 1) {
            slide = currentSlide = 0;
        }

        blocks[slide].classList.add("active");
}

rightArrow.addEventListener("click", () => {
    changeSlide(currentSlide += 1)
})

leftArrow.addEventListener("click", () => {
    changeSlide(currentSlide -= 1)
})