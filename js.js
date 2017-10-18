var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            
var material = new THREE.MeshPhongMaterial ( { color: 0x460808, shininess: 100} );
var cube = new THREE.Mesh( geometry, material );
cube.scale.x = 3.0;    
cube.scale.y = 0.5;    
cube.rotation.y = 30 * Math.PI/180;
scene.add( cube );


addLights();
animate();

function addLights() {
    var dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(50, 50, 50);
    scene.add(dirLight);
}

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
};
