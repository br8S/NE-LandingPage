var event_slide_displacement = 0;
var mix_slide_displacement = 0;

document.querySelector(".event-left-button").addEventListener("click", function() {
    event_slide_displacement -= 500; 
    gsap.to(".upcoming-events-container", {
        x: event_slide_displacement 
    })
})

document.querySelector(".event-right-button").addEventListener("click", function() {
    event_slide_displacement += 500; 
    gsap.to(".upcoming-events-container", {
        x: event_slide_displacement
    })
})

document.querySelector(".mix-left-button").addEventListener("click", function() {
    mix_slide_displacement -= 500; 
    gsap.to(".new-mixes-container", {
        x: mix_slide_displacement 
    })
})

document.querySelector(".mix-right-button").addEventListener("click", function() {
    mix_slide_displacement += 500; 
    gsap.to(".new-mixes-container", {
        x: mix_slide_displacement
    })
})