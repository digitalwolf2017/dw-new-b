"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useInView } from "framer-motion";

const particleCount = 1200;

// Generate random floating particles outside the component to avoid React Compiler purity warnings
const generateParticles = () => {
  const pos = new Float32Array(particleCount * 3);
  const vel = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    // Random positions inside a bounding box
    pos[i * 3] = (Math.random() - 0.5) * 40;     // x
    pos[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    
    // Random velocity vector
    vel[i * 3] = (Math.random() - 0.5) * 0.02;
    vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
  }
  
  return { positions: pos, velocities: vel };
};

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Initialize state lazily once on mount
  const [{ positions, velocities }] = useState(generateParticles);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Get mouse position in world space
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      // Apply velocity for basic drift
      positionsArray[idx] += velocities[idx];
      positionsArray[idx + 1] += velocities[idx + 1];
      positionsArray[idx + 2] += velocities[idx + 2];
      
      const x = positionsArray[idx];
      const y = positionsArray[idx + 1];
      
      // Interactive mouse repel
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 5) { // If mouse is within 5 units
        const force = (5 - dist) * 0.03;
        positionsArray[idx] += (dx / dist) * force;
        positionsArray[idx + 1] += (dy / dist) * force;
      }

      // Constrain inside the box, seamlessly wrap around to the other side
      if (positionsArray[idx] > 20) positionsArray[idx] = -20;
      if (positionsArray[idx] < -20) positionsArray[idx] = 20;
      if (positionsArray[idx + 1] > 15) positionsArray[idx + 1] = -15;
      if (positionsArray[idx + 1] < -15) positionsArray[idx + 1] = 15;
      if (positionsArray[idx + 2] > 10) positionsArray[idx + 2] = -10;
      if (positionsArray[idx + 2] < -10) positionsArray[idx + 2] = 10;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire cloud of particles for added depth
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  if (!positions) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.12} 
        color="#ffffff" 
        transparent 
        opacity={0.5} 
        sizeAttenuation 
      />
    </points>
  );
}

export function HeroMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background">
      <Canvas 
        frameloop={isInView ? "always" : "demand"}
        camera={{ position: [0, 0, 15], fov: 60 }}
      >
        <FloatingParticles />
      </Canvas>
      
      {/* Vignette fade to make text legible and blend edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_80%)]" />
    </div>
  );
}
