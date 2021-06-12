document.querySelector("#nav_button").addEventListener("click", function() {
    gsap.to("#nav_layer", {
        duration: 0.5,
        y: 0
    })

    gsap.from("#exit_button", {
        opacity: 0,
        delay: 0.5
    })

    gsap.to("#nav_ne_logo", {
        opacity: 1, 
        duration: 1,
        delay: 0.5
    })

    gsap.to(".nav-links", {
        opacity: 1, 
        delay: 0.7
    })
})

document.querySelector("#exit_button").addEventListener("click", function() {
    gsap.to("#nav_layer", {
        duration: 0.5,
        y: -1600,
        delay: 0.3
    })

    gsap.to("#nav_ne_logo", {
        opacity: 0, 
        duration: 1,
        delay: 0.2
    })

    gsap.to(".nav-links", {
        opacity: 0, 
        delay: 0.2
    })
})

document.querySelector("#exit_button").addEventListener("mouseenter", function() {
    gsap.to("#exit_button", {
        rotation: 90,
        opacity: 1,
    })
})

document.querySelector("#exit_button").addEventListener("mouseleave", function() {
    gsap.to("#exit_button", {
        rotation: 0,
        opacity: 0.2,
    })
})

