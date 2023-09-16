/****    NAV SLIDEOUT    ****/
let burger = document.querySelector('.strip');
let slideout = document.querySelector('.header-nav__mb-slideout')
let menu__open = false;

let burger_strip_first_child = document.querySelector('.burger-strip-2 div:first-child')
let burger_strip_second_child = document.querySelector('.burger-strip-2 div:nth-child(2)')
let burger_strip_last_child = document.querySelector('.burger-strip-2 div:last-child')

burger.addEventListener('click', event => {
    if(!menu__open){
        slideout.style.visibility = 'visible';
        slideout.style.transform = 'translate(1000px)';
        menu__open = true;

        burger_strip_first_child.classList.add('burger-click-1');
        burger_strip_second_child.classList.add('burger-click-2');
        burger_strip_last_child.classList.add('burger-click-3');
    }
    else {
        slideout.style.visibility = 'hidden';
        slideout.style.transform = 'translate(-1000px)';
        menu__open = false;

        burger_strip_first_child.classList.remove('burger-click-1');
        burger_strip_second_child.classList.remove('burger-click-2');
        burger_strip_last_child.classList.remove('burger-click-3');
    }
})

let mb_nav_links = document.querySelectorAll('.header-nav__mb-slideout .header-nav__nav-link');

for(var x = 0; x < mb_nav_links.length; x++){
    mb_nav_links[x].addEventListener('click', event => {
        slideout.style.visibility = 'hidden';
        slideout.style.transform = 'translate(-1000px)';
        menu__open = false;

        burger_strip_first_child.classList.remove('burger-click-1');
        burger_strip_second_child.classList.remove('burger-click-2');
        burger_strip_last_child.classList.remove('burger-click-3');
    })
}