'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Interaction logic for the particles
const ParticleField = ({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) => {
  const count = 2000; // Number of particles
  const mesh = useRef<THREE.Points>(null!);
  
  // Generate random positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    const currentMouseX = mouse.current[0];
    const currentMouseY = mouse.current[1];

    // Gentle rotation
    mesh.current.rotation.y = time * 0.05;
    
    // Mouse interaction - tilt the whole field
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, currentMouseY * 0.2, 0.1);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, currentMouseX * 0.1, 0.1);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#1a4d3a"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
};

// Interactive connections
const Connections = ({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) => {
    const group = useRef<THREE.Group>(null!);
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        
        // Rotate the entire group slowly
        if(group.current) {
            group.current.rotation.y = time * 0.03;
            group.current.rotation.x = mouse.current[1] * 0.1;
        }
    });

    // Create a grid of lines
    const lines = useMemo(() => {
        const temp = [];
        const size = 20;
        const step = 2;
        for (let x = -size; x <= size; x += step) {
             // Vertical lines
             temp.push(
                <line key={`v-${x}`}>
                    <bufferGeometry>
                        <float32BufferAttribute attach="attributes-position" count={2} array={new Float32Array([x, -size, 0, x, size, 0])} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#1a4d3a" transparent opacity={0.1} />
                </line>
             );
             // Horizontal lines
             temp.push(
                <line key={`h-${x}`}>
                    <bufferGeometry>
                        <float32BufferAttribute attach="attributes-position" count={2} array={new Float32Array([-size, x, 0, size, x, 0])} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#1a4d3a" transparent opacity={0.1} />
                </line>
             );
        }
        return temp;
    }, []);

    return <group ref={group}>{lines}</group>;
}

// Complex interactive mesh (The "Digital Fabric")
const DigitalFabric = ({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) => {
    const mesh = useRef<THREE.InstancedMesh>(null!);
    const count = 500;
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() / 200;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
      }
      return temp;
    }, []);
  
    useFrame((state) => {
      if (!mesh.current) return;
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        t = particle.t += speed / 2;
        const a = Math.cos(t) + Math.sin(t * 1) / 10;
        const b = Math.sin(t) + Math.cos(t * 2) / 10;
        const s = Math.cos(t);
        
        // Mouse influence
        const targetMx = (mouse.current[0] * 10 - particle.mx) * 0.1;
        const targetMy = (mouse.current[1] * 10 - particle.my) * 0.1;
        particle.mx += targetMx;
        particle.my += targetMy;
  
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        dummy.scale.set(s, s, s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    });
  
    return (
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#F2611D" emissive="#F2611D" emissiveIntensity={0.5} transparent opacity={0.8} />
      </instancedMesh>
    );
  }


const Scene = () => {
    const mouse = useRef<[number, number]>([0, 0]);
    const { viewport } = useThree();

    // Track mouse in normalized coordinates (-1 to 1)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = [
                (e.clientX / window.innerWidth) * 2 - 1,
                -(e.clientY / window.innerHeight) * 2 + 1
            ];
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#F2611D" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1a4d3a" />
            
            {/* Orange Digital Fabric - The "Chaos/Creativity" */}
            <DigitalFabric mouse={mouse} />
            
            {/* Green Structured Grid/Particles - The "Order/Architecture" */}
            <ParticleField mouse={mouse} />
        </>
    );
};

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <fog attach="fog" args={['#020805', 10, 40]} />
        <Scene />
      </Canvas>
    </div>
  );
}

