import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import './App.css';

function App() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new CSS3DRenderer(); // Use CSS3DRenderer for DOM elements in 3D
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a div element (e.g., the sign-in button)
    const signInDiv = document.createElement('div');
    signInDiv.className = 'signInDiv';
    signInDiv.innerHTML = '<button>Sign In with Face</button>';

    const signInObject = new CSS3DObject(signInDiv);
    signInObject.position.set(0, 0, 0); // Center it
    scene.add(signInObject);

    camera.position.z = 500; // Adjust distance for perspective

    const animate = function () {
      requestAnimationFrame(animate);
      signInObject.rotation.y += 0.01; // Example rotation for 3D effect
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="App">
      <h1>3D Employee Facial Recognition Sign-In</h1>
      <div ref={sceneRef}></div>
    </div>
  );
}

export default App;
