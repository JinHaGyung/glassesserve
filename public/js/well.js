import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement)
scene.background = new THREE.Color(0xF1F1F1)

camera.position.z = 40;
camera.position.y = 10;

const controls = new OrbitControls(camera,renderer.domElement)
controls.enableZoom =false;
controls.panSpeed = 0.001
controls.minPolarAngle = 1
controls.maxPolarAngle  = 1

const light = new THREE.DirectionalLight( 0xFFFFFF,20 );
const light2 = new THREE.DirectionalLight( 0xFFFFFF,20 );
light.position.set(0,20,10)
light2.position.set(0,20,-10)
scene.add( light);
scene.add( light2);

let loader = new GLTFLoader();
loader.load('model/well.glb',(gltf)=>{
  gltf.scene.position.set(0,8,0);
  scene.add(gltf.scene);
  renderer.render( scene, camera );
});

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
};

animate()
addEventListener("resize",()=>{
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  renderer.setSize(innerWidth,innerHeight);
})