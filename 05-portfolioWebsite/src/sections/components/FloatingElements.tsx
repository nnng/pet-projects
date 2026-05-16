import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

export function FloatingElements() {
  const groupRef = useRef<Group>(null);
  const card1Ref = useRef<Mesh>(null);
  const card2Ref = useRef<Mesh>(null);
  const card3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.z += 0.0005;
    }

    // Floating animation for cards
    if (card1Ref.current) {
      card1Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002;
      card1Ref.current.position.x += Math.cos(state.clock.elapsedTime * 0.3) * 0.002;
    }

    if (card2Ref.current) {
      card2Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.6) * 0.0025;
      card2Ref.current.position.x += Math.cos(state.clock.elapsedTime * 0.4) * 0.0015;
    }

    if (card3Ref.current) {
      card3Ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.7) * 0.002;
      card3Ref.current.position.x += Math.cos(state.clock.elapsedTime * 0.5) * 0.0018;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Dashboard Card */}
      <mesh ref={card1Ref} position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshPhongMaterial
          color={0x1a1a1a}
          emissive={0x2a2a2a}
          shininess={100}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Floating Code Panel */}
      <mesh ref={card2Ref} position={[-3, 2, 1]}>
        <boxGeometry args={[2.5, 1.8, 0.15]} />
        <meshPhongMaterial
          color={0x0f0f10}
          emissive={0x1a1a1a}
          shininess={80}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Animated Shape */}
      <mesh ref={card3Ref} position={[3, -1.5, 0.5]}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhongMaterial
          color={0xa11212}
          emissive={0x8b0d0d}
          wireframe={true}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Decorative Spheres */}
      <mesh position={[-2, -2, 2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color={0xa11212} emissive={0x6b0a0a} transparent opacity={0.4} />
      </mesh>

      <mesh position={[2, 2, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhongMaterial color={0x4b1e1e} emissive={0x2a0f0f} transparent opacity={0.3} />
      </mesh>

      {/* Grid Lines for Atmosphere */}
      <lineSegments>
        <bufferGeometry
          attach="geometry"
          args={[new Float32Array([-5, 0, 0, 5, 0, 0, 0, -5, 0, 0, 5, 0, 0, 0, -5, 0, 0, 5])]}
        />
        <lineBasicMaterial
          attach="material"
          color={0xa11212}
          transparent
          opacity={0.2}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}
