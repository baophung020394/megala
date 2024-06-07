// components/AnimatedBackground.tsx
import React from "react";
import { Box } from "@chakra-ui/react";
// import "./styles.css";

const AnimatedBackground: React.FC = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      overflow="hidden"
      zIndex="-1"
    >
      <Box className="cube cube-small" style={{ top: "10%", left: "20%" }} />
      <Box className="cube cube-medium" style={{ top: "50%", left: "40%" }} />
      <Box className="cube cube-large" style={{ top: "30%", left: "70%" }} />
      <Box className="cube cube-small" style={{ top: "70%", left: "80%" }} />
      <Box className="cube cube-medium" style={{ top: "20%", left: "60%" }} />
      {/* Thêm các Cube khác nếu cần */}
    </Box>
  );
};

export default AnimatedBackground;
