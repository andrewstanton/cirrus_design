/**
 * 
 * Vanilla JS Slider
 *
 */
const activeClass = `active`;
const sliderTime = 6000;

// Start Slider
const initSlider = () => {
    setInterval(slider, sliderTime);
}

// Slide Looping Function
const slider = () => {
    if(typeof document !== 'undefined') {
        const banner = document.querySelector('.banner');
        
        if(banner !== null) {
            const slides = banner.children;
            let activeSlide;

            // Loop Thru Slides
            for(var i = 0; i < slides.length; i++) {
                if(hasClass(slides[i], activeClass)) {
                    activeSlide = {
                        slide: slides[i],
                        ix: i
                    };
                }
            };

            // Select New Slide And Remove Class From Current Slide
            let nextSlide = activeSlide.ix == slides.length - 1 ? slides[0] : slides[ activeSlide.ix + 1 ];

            nextSlide.classList.add(activeClass);
            activeSlide.slide.classList.remove(activeClass);
        }
    }
};


// Has Class like jQuery
const hasClass = (element, name) => element.classList.contains(name) ? true : false;

// Call Function
initSlider();