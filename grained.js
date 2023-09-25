/****    GRAINED JS    ****/
var options = {
    "animate": true,
    "patternWidth": 100,
    "patternHeight": 100,
    "grainOpacity": 0.8,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
}

grained('#grid_overlay_container', options);
document.querySelector('#grid_overlay_container').style.position = 'fixed';