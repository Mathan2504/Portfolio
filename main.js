/* ========================================
   HOLOGRAPHIC PORTFOLIO - THREE.JS & ANIMATIONS
   ======================================== */

// Three.js Scene Setup
let scene, camera, renderer, particles;

function initThreeJS() {
  const canvas = document.getElementById('holographic-canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050812);

  // Camera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 50;

  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    canvas, 
    antialias: true, 
    alpha: true 
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create particle system
  createParticleSystem();

  // Create floating grid
  createFloatingGrid();

  // Create network nodes
  createNetworkNodes();

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate particles
    if (particles) {
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;
      particles.rotation.z += 0.0001;
    }

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);
}

function createParticleSystem() {
  const particleCount = 500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Cyan color
  const cyanColor = new THREE.Color(0x00f2fe);
  const greenColor = new THREE.Color(0x00ff41);
  const blueColor = new THREE.Color(0x0a1e2e);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 200;
    positions[i + 1] = (Math.random() - 0.5) * 200;
    positions[i + 2] = (Math.random() - 0.5) * 200;

    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i] = cyanColor.r;
      colors[i + 1] = cyanColor.g;
      colors[i + 2] = cyanColor.b;
    } else if (colorChoice < 0.66) {
      colors[i] = greenColor.r;
      colors[i + 1] = greenColor.g;
      colors[i + 2] = greenColor.b;
    } else {
      colors[i] = blueColor.r;
      colors[i + 1] = blueColor.g;
      colors[i + 2] = blueColor.b;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

function createFloatingGrid() {
  const gridSize = 100;
  const gridDivisions = 10;
  const gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
  gridHelper.position.z = -50;
  
  // Color the grid with cyan and green
  const material = gridHelper.material;
  material.color.setHex(0x00f2fe);
  material.transparent = true;
  material.opacity = 0.2;

  scene.add(gridHelper);
}

function createNetworkNodes() {
  const nodeCount = 20;
  const geometry = new THREE.IcosahedronGeometry(0.5, 4);
  
  for (let i = 0; i < nodeCount; i++) {
    const material = new THREE.MeshPhongMaterial({
      color: Math.random() < 0.5 ? 0x00f2fe : 0x00ff41,
      emissive: Math.random() < 0.5 ? 0x00f2fe : 0x00ff41,
      emissiveIntensity: 0.5,
      wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150,
      (Math.random() - 0.5) * 150
    );

    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;

    // Store rotation velocity
    mesh.rotationVelocity = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01
    };

    scene.add(mesh);
  }
}

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Sparkle effect generator
function generateSparkles() {
  const container = document.querySelector('.sparkle-container');
  
  // Clear existing sparkles
  container.innerHTML = '';

  // Generate random sparkles
  const sparkleCount = 30;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 2;
    
    sparkle.style.animation = `sparkleFloat ${duration}s ease-in-out ${delay}s`;
    
    container.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => sparkle.remove(), (delay + duration) * 1000);
  }
}

// Generate sparkles continuously
setInterval(generateSparkles, 3000);

// Panel positioning with parallax on scroll
function updatePanelPositions() {
  const scrollY = window.scrollY;
  const panels = document.querySelectorAll('.floating-panel');
  
  panels.forEach((panel, index) => {
    const offset = scrollY * (0.1 + index * 0.05);
    panel.style.transform = `translateY(${offset}px)`;
  });
}

window.addEventListener('scroll', updatePanelPositions);

// Glitch text effect data
document.addEventListener('DOMContentLoaded', () => {
  const glitchElements = document.querySelectorAll('.glitch-text');
  glitchElements.forEach(el => {
    el.setAttribute('data-text', el.textContent);
  });
});

// Animate skill items on hover
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 25px rgba(0, 255, 65, 0.6), inset 0 0 15px rgba(0, 255, 65, 0.2)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
});

// CTA Button interactions
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', function() {
    // Create explosion effect
    const rect = this.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.width = '6px';
      particle.style.height = '6px';
      particle.style.borderRadius = '50%';
      particle.style.background = '#00ff41';
      particle.style.boxShadow = '0 0 10px #00ff41';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';

      document.body.appendChild(particle);

      const angle = (i / 10) * Math.PI * 2;
      const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
      };

      let life = 1;
      const animateParticle = () => {
        life -= 0.02;
        particle.style.left = (x + velocity.x * (1 - life) * 100) + 'px';
        particle.style.top = (y + velocity.y * (1 - life) * 100) + 'px';
        particle.style.opacity = life;

        if (life > 0) {
          requestAnimationFrame(animateParticle);
        } else {
          particle.remove();
        }
      };

      animateParticle();
    }
  });
}

// Navigation: smooth scroll on click and active-link highlighting
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        history.pushState(null, '', href);
      }
    }
  });
});

// Highlight nav link for the section currently in view
const sections = document.querySelectorAll('section');
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -40% 0px',
  threshold: 0
};
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(sec => sectionObserver.observe(sec));

// Resize observer for responsive adjustments
const resizeObserver = new ResizeObserver(() => {
  // Adjust panel positions based on viewport
  const viewport = document.querySelector('.dashboard-container');
  if (viewport) {
    const panels = viewport.querySelectorAll('.floating-panel:not(.central-panel)');
    
    if (window.innerWidth < 1024) {
      panels.forEach(panel => {
        panel.style.opacity = '0.7';
      });
    }
  }
});

resizeObserver.observe(document.body);

// Initialize everything when page loads
window.addEventListener('load', () => {
  initThreeJS();
  generateSparkles();

  // Add some glitch animation to the welcome title
  const welcomeTitle = document.querySelector('.welcome-title');
  if (welcomeTitle) {
    welcomeTitle.setAttribute('data-text', 'WELCOME TO THE MATRIX');
  }

  // Animate panels on load
  const panels = document.querySelectorAll('.floating-panel');
  panels.forEach((panel, index) => {
    panel.style.animation = `panelFloat ${6 + index * 0.5}s ease-in-out infinite`;
  });
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (renderer) renderer.render(scene, camera);
  }
});

// Mouse tracking for interactive effects (optional)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

  // Optional: Move particles based on mouse
  if (particles) {
    particles.rotation.y += mouseX * 0.0001;
    particles.rotation.x += mouseY * 0.0001;
  }
});

// Periodic sparkle generation
setInterval(() => {
  generateSparkles();
}, 5000);

console.log('🌟 Holographic Portfolio Initialized');
console.log('✨ Welcome to the Matrix!');
