/**
 * 
 * Vanilla JS Slider
 *
 */
const activeClass = `active`;
const sliderTime = 6000;

// Start Slider
const initSlider = () => {
    const banner = document.querySelector('.banner');
    console.log(banner);
    /*
    const slides = banner.children;
    slides[0].classList.add(activeClass);
    setInterval(slider, sliderTime);*/
}

// Slide Looping Function
const slider = () => {
    const banner = document.querySelector('.banner');
    const slides = banner.children;
    let activeSlide;
    slides.forEach((slide, ix) => {
        if(hasClass(slide, 'active')) {
            activeSlide = {slide, ix}; 
        }
    });

    // Select New Slide And Remove Class From Current Slide
    let nextSlide = activeSlide.ix <= slides.length - 1 ? slides[0] : slides[ activeSlide.ix + 1 ];
    nextSlide.classList.add(activeClass);
    activeSlide.classList.remove(activeClass);
};


// Has Class like jQuery
const hasClass = (element, name) => element.classList.contains(name) ? true : false;


// Call Function
if(typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        console.log('Hello');
        initSlider();
    });
}