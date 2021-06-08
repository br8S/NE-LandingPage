document.querySelector("#nav_button").addEventListener("click", function() {
    gsap.to("#nav_layer", {
        duration: 0.75,
        y: 0
    })

    gsap.from("#exit_button", {
        opacity: 0,
        delay: 0.5
    })
})

document.querySelector("#exit_button").addEventListener("click", function() {
    gsap.to("#nav_layer", {
        duration: 0.75,
        y: -1600
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