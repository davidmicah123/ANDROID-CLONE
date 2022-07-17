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
