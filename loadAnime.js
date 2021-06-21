window.addEventListener('load', function() {
   gsap.to("#load_animation", {
       autoAlpha: 0, 
       delay: 2
   })
   
    gsap.to("#load_logo", {
       rotation: 360,
       duration: 1
   })
})