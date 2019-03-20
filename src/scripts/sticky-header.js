/**
 * Vanilla JS - Sticky Header
 */
const hasClass = (element, name) => element.classList.contains(name) ? true : false;


const sticky = (selector) => {
    if(typeof document !== 'undefined') {
        const header = document.querySelector(selector),
        stuckValue = 125,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        stickyClass = `s-header--sticky`;

        // Add Class
        if(!hasClass(header, stickyClass) && scrollTop >= stuckValue) {
            header.classList.add(stickyClass)
        }

        // Remove Class
        if(hasClass(header, stickyClass) && scrollTop < stuckValue) {
            header.classList.remove(stickyClass);
        }
    }
}

// On Window Scroll
if(typeof window !== 'undefined') {
    window.onscroll = () => {
        sticky('.s-header');
    }
}