console.clear();

// Create an empty, needed for the renderer
const scene = new THREE.Scene();
// Create a camera and translate it
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 7, 10);

// Create a WebGL renderer and enable the antialias effect
const renderer = new THREE.WebGLRenderer({ antialias: true });
// Define the size and append the <canvas> in our document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls to allow the user to move in the scene
const controls = new THREE.OrbitControls(camera, renderer.domElement);

const group = new THREE.Group();
scene.add(group);

// Create a torus know with basic geometry & material
const geometry = new THREE.TorusKnotGeometry(4, 1.3, 100, 16);
const torusKnot = new THREE.Mesh(geometry);

// Instantiate a sampler so we can use it later
const sampler = new THREE.MeshSurfaceSampler(torusKnot).build();

// Array used to store all points coordinates
const vertices = [];
// Create a dummy Vector to store the sampled coordinates
const tempPosition = new THREE.Vector3();
// Loop to sample a coordinate for each points
for (let i = 0; i < 15000; i ++) {
  // Sample a random position in the torus
  sampler.sample(tempPosition);
  // Push the coordinates of the sampled coordinates into the array
	vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
}

// Create a geometry for the points
const pointsGeometry = new THREE.BufferGeometry();
// Define all points positions from the previously created array
pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
// Define the matrial of the points
const pointsMaterial = new THREE.PointsMaterial({
  color: 0xff61d5,
  size: 0.03
});
// Create an instance of points based on the geometry & material
const points = new THREE.Points(pointsGeometry, pointsMaterial);
// Add them into the main group
group.add(points);

/// Render the scene on each frame
function render () {  
  // Rotate the scene a little on each frame
  group.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(render);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);