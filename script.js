'use strict';
const popUp = document.querySelector('.fixed_container');
popUp.addEventListener('mouseover',
    () => {
        popUp.style.backgroundColor = "rgba(255, 255, 255, 1)"
    }
); 
popUp.addEventListener('mouseout',
    () => {
        popUp.style.backgroundColor = "rgba(255, 255, 255, 0.87)"
    }
);
const closePopUp = document.querySelector('.close_popup');
closePopUp.addEventListener('click', 
    () => {
        console.log(1)
        popUp.style.animationName = `slideOut`;
        if (popUp.style.animationName === `slideOut`) {
            popUp.style.opacity = 0;
            popUp.classList.add('hidden');
        }
    }
);




const sliderScroll1 = document.querySelector('.slider_scrole1');
const sliderScroll2 = document.querySelector('.slider_scrole2');
const sliderScroll3 = document.querySelector('.slider_scrole3');
const sliderScroll4 = document.querySelector('.slider_scrole4');

const slider1 = document.querySelector('.scroller_wrapper1');
const slider2 = document.querySelector('.scroller_wrapper2');
const slider3 = document.querySelector('.scroller_wrapper3');
const slider4 = document.querySelector('.scroller_wrapper4');


const navList = document.querySelector('.nav_list');
navList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target === sliderScroll1) {
        slider1.scrollIntoView({behavior: "smooth"});
    }else if (e.target === sliderScroll2) {
        slider2.scrollIntoView({behavior: "smooth"});
    }else if (e.target === sliderScroll3) {
        slider3.scrollIntoView({behavior: "smooth"});
    }else if (e.target === sliderScroll4) {
        slider4.scrollIntoView({behavior: "smooth"});
    }
});
