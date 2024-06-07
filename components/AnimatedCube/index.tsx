// components/AnimatedCubes.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";

function Cube({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.position.x += Math.sin(ref.current.rotation.y) * 0.02;
    ref.current.position.y += Math.cos(ref.current.rotation.x) * 0.02;
    ref.current.position.z += Math.sin(ref.current.rotation.z) * 0.02;

    if (ref.current.position.x > 5 || ref.current.position.x < -5) {
      ref.current.position.x = -ref.current.position.x;
    }
    if (ref.current.position.y > 5 || ref.current.position.y < -5) {
      ref.current.position.y = -ref.current.position.y;
    }
    if (ref.current.position.z > 5 || ref.current.position.z < -5) {
      ref.current.position.z = -ref.current.position.z;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#007eff"} />
    </mesh>
  );
}

const AnimatedCubes: React.FC = () => {
  const generateRandomPosition = (): [number, number, number] => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ];

  const cubes = Array.from({ length: 5 }).map((_, i) => (
    <Cube key={i} position={generateRandomPosition()} />
  ));

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      zIndex="1"
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 5, -4]} />
        {cubes}
      </Canvas>
    </Box>
  );
};

export default AnimatedCubes;
