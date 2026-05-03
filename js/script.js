let current = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    current = index;
}

// AUTO SLIDE
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 6000); 

// INIT
showSlide(0);
