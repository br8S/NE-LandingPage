
var splide_hero = new Splide( '.splide__hero', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
});

splide_hero.mount();

var splide_upcoming = new Splide( '.splide__upcoming', {
    type   : 'loop',
    padding: '32px',
    perPage: 4,
    perMove: 1,
    gap: '12px',
    heightRatio : 0.3,
    autoScroll: {
        speed: 0.6,
    },
    breakpoints: {
    1050: {
        perPage: 3,
        heightRatio : 0.4,
    },
    750: {
        perPage: 2,
        heightRatio : 0.7,
    },
    480: {
        perPage: 1,
        heightRatio : 1.2,
    },
},
});

splide_upcoming.mount();
//splide_upcoming.mount( window.splide.Extensions );

var splide_mixes = new Splide( '.splide__mixes', {
    type   : 'loop',
    padding: '32px',
    perPage: 4,
    perMove: 1,
    gap: '12px',
    heightRatio : 0.3,
    autoScroll: {
        speed: 0.6,
    },
    breakpoints: {
    1050: {
        perPage: 3,
        heightRatio : 0.4,
    },
    750: {
        perPage: 2,
        heightRatio : 0.7,
    },
    480: {
        perPage: 1,
        heightRatio : 1.2,
    },
},

});

splide_mixes.mount();
//splide_mixes.mount( window.splide.Extensions );

var splide__upcoming = document.querySelector('.splide__upcoming');

splide__upcoming.addEventListener('mouseenter', event => {
    document.querySelector('.splide__upcoming .splide__arrows').style.opacity = 1;
})

splide__upcoming.addEventListener('mouseleave', event => {
    document.querySelector('.splide__upcoming .splide__arrows').style.opacity = 0;
})

var splide__mixes = document.querySelector('.splide__mixes');

splide__mixes.addEventListener('mouseenter', event => {
    document.querySelector('.splide__mixes .splide__arrows').style.opacity = 1;
})

splide__mixes.addEventListener('mouseleave', event => {
    document.querySelector('.splide__mixes .splide__arrows').style.opacity = 0;
})