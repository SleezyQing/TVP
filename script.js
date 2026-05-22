// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));


// ==========================
// PARALLAX EFFECT
// ==========================

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  document.querySelector(".hero-content").style.transform =
    `translateY(${scrollY * 0.2}px)`;

});


// ==========================
// THREE.JS SCI-FI PARTICLES
// ==========================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.z = 5;


// PARTICLES

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 5000;

const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++){

  posArray[i] = (Math.random() - 0.5) * 25;

}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size:0.02,
  color:0x00f7ff
});

const particlesMesh = new THREE.Points(
  particlesGeometry,
  particlesMaterial
);

scene.add(particlesMesh);


// ANIMATION

function animate(){

  requestAnimationFrame(animate);

  particlesMesh.rotation.y += 0.0008;
  particlesMesh.rotation.x += 0.0003;

  renderer.render(scene, camera);

}

animate();


// RESPONSIVE

window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

});
