var swiper = new Swiper(".books-slider", {
    loop: true,

    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});

let sera = document.querySelector('#search-btn');
let sr = document.querySelector('.header-1 .search-form');
let sing = document.querySelector('#login-btn');
let singin = document.querySelector('.login-form-container');
let close = document.querySelector('  #close-login-btn')
sera.onclick = () => {

    sr.classList.toggle('activ')
};

close.onclick = () => { singin.classList.remove('activ') };
sing.onclick = () => {
    singin.classList.toggle('activ')

};


var swiper = new Swiper(".featured-slider", {

    spaceBetween: 20,
    loop: true,


    centeredSlides: true,

    autoplay: {

        delay: 9500,
        disabOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,

        },


        450: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});

var swiper = new Swiper(".arrivals-slider", {


    loop: true,


    centeredSlides: true,

    autoplay: {

        delay: 9500,
        disabOnInteraction: false,
    },


    breakpoints: {

        0: {
            slidesPerView: 1,

        },


        450: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".reviews-slider", {


    loop: true,


    centeredSlides: true,

    autoplay: {

        delay: 9500,
        disabOnInteraction: false,
    },


    breakpoints: {

        0: {
            slidesPerView: 1,

        },


        450: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".blogs-slider", {


    loop: true,


    centeredSlides: true,

    autoplay: {

        delay: 9500,
        disabOnInteraction: false,
    },


    breakpoints: {

        0: {
            slidesPerView: 1,

        },


        450: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});