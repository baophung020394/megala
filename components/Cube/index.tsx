// components/Cube.tsx
import React from "react";
import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const spin = keyframes`
  0% { transform: rotateY(0deg) rotateX(0deg); }
  100% { transform: rotateY(360deg) rotateX(360deg); }
`;

const MotionBox = motion(Box);

const Cube: React.FC<{ size: string; top: string; left: string }> = ({
  size,
  top,
  left,
}) => {
  return (
    <MotionBox
      position="absolute"
      top={top}
      left={left}
      w={size}
      h={size}
      bg="transparent"
      animation={`${spin} 10s infinite linear`}
      style={{ perspective: "1000px" }}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{ transform: "translateZ(calc(var(--cube-size) / 2))" }}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{
          transform: "rotateY(90deg) translateZ(calc(var(--cube-size) / 2))",
        }}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{
          transform: "rotateY(180deg) translateZ(calc(var(--cube-size) / 2))",
        }}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{
          transform: "rotateY(270deg) translateZ(calc(var(--cube-size) / 2))",
        }}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{
          transform: "rotateX(90deg) translateZ(calc(var(--cube-size) / 2))",
        }}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 102, 255, 0.6)"
        style={{
          transform: "rotateX(-90deg) translateZ(calc(var(--cube-size) / 2))",
        }}
      />
    </MotionBox>
  );
};

export default Cube;
