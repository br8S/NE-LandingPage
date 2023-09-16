let scene, axesHelper, ambientLight, pointLight, 
    directionalLight, camera, canvas, renderer, 
    gui, group, controls, raycaster, pointer, click,
    screens, screen1, screen2, screen3, screen4, 
    screen5, screen6, elapsedTime, intersection = null

let hoverState = false
let animTimer = new THREE.Clock()
let animElapsedTime 

init()
animate()


// Animations 
function animate(){
    controls.update()
    window.requestAnimationFrame(animate)

    //Render    
    render()
}

function init(){
    clock = new THREE.Clock()
    gui = new dat.GUI()

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x000 );

    raycaster = new THREE.Raycaster()
    pointer = new THREE.Vector2()
    click = new THREE.Vector2()

    axesHelper = new THREE.AxesHelper( 5 );
    //scene.add( axesHelper );

    ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    pointLight = new THREE.PointLight( 0xff0000, 10, 100 );
    pointLight.position.set( 10, 0, 10 );

    directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
    scene.add( directionalLight );

    const testVideo = document.getElementById( 'testVideo' );
    const videoTexture = new THREE.VideoTexture( testVideo );

    const geometry = new THREE.SphereGeometry(16, 32, 16, 3.14, 0.56, 1.56, 0.3)
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture })
    videoMaterial.side = THREE.DoubleSide;

    screen1 = new THREE.Mesh( geometry,  videoMaterial );
    screen2 = new THREE.Mesh( geometry,  videoMaterial );
    screen3 = new THREE.Mesh( geometry,  videoMaterial );
    screen4 = new THREE.Mesh( geometry,  videoMaterial );
    screen5 = new THREE.Mesh( geometry,  videoMaterial );
    screen6 = new THREE.Mesh( geometry,  videoMaterial );

    screens = [ screen1, screen2, screen3, screen4, screen5, screen6 ]

    screen1.rotation.y = Math.PI
    screen2.rotation.y = 0
    screen3.rotation.y = Math.PI / 3
    screen4.rotation.y = - Math.PI / 3
    screen5.rotation.y = 2 * Math.PI / 3
    screen6.rotation.y = - 2 * Math.PI / 3
    group = new THREE.Group();

    group.add( screen1 );
    group.add( screen2 );
    group.add( screen3 );
    group.add( screen4 );
    group.add( screen5 );
    group.add( screen6 );

    scene.add( group );

    // Sizes
    const sizes = {
        width: window.innerWidth, 
        height: 600
    }

    // Camera
    camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 1, 1000 )
    scene.add(camera)
    camera.position.z = 28
    camera.position.y = -5

    // Renderer
    canvas = document.querySelector('.webgl')
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })

    controls = new THREE.OrbitControls( camera, renderer.domElement )
    controls.enableDamping = true
    controls.dampingFactor = 0.025
    controls.minDistance = 28 
    controls.maxDistance = 28

    renderer.setSize(sizes.width, sizes.height)

    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('click', onPointerClick)
}

function onPointerMove ( event ) { 
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1
}

function onPointerClick ( event ) {
    click.x = ( event.clientX / window.innerWidth ) * 2 - 1
    click.y = - ( event.clientY / window.innerHeight ) * 2 + 1

    handleClickScreen()
}

function render() {
    raycaster.setFromCamera( pointer, camera )
    const intersects = raycaster.intersectObjects( screens, false )

    handleScreenScaleAnim(intersects)
    renderer.render(scene, camera)
}

function handleScreenScaleAnim(intersects){
    for ( screen of screens ){
        screen.scale.set(1, 1, 1)
    }

    if ( intersects.length ) {
        if( hoverState !== true ) {
            hoverState = true
            animTimer.start()
        }

        //handles screen scale animation
        animScale = 1 + (animTimer.getElapsedTime() * 1)
        if( animScale > 1.15 ) animScale = 1.15
        intersects[0].object.scale.set(animScale, animScale, animScale)

        group.rotation.y += 0.0004

    } 
    else {
        hoverState = false
        group.rotation.y += 0.0025  
    }

}

function handleClickScreen(){
    raycaster.setFromCamera( click, camera )
    const intersects = raycaster.intersectObjects( screens, false )

    if( intersects.length ){
        if( intersects[0].object === screen1 ) console.log('THIS SCREEN 1')
        if( intersects[0].object === screen2 ) console.log('THIS SCREEN 2')
        if( intersects[0].object === screen3 ) console.log('THIS SCREEN 3')
        if( intersects[0].object === screen4 ) console.log('THIS SCREEN 4')
        if( intersects[0].object === screen5 ) console.log('THIS SCREEN 5')
        if( intersects[0].object === screen6 ) console.log('THIS SCREEN 6')
    }
}
