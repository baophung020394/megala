import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

const MotionBox = motion(Box);

const Card: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setX(x);
    setY(y);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <Box>
      <MotionBox
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        transform={`rotateY(${x}deg) rotateX(${-y}deg)`}
        transition="transform 0.3s ease-out"
        // w="100%"
        maxW="28rem"
        w={{ base: "28rem", md: "40vw", lg: "30vw", "2xl": "30vw" }}
        h="400px"
        bg="#242449"
        border="1px solid #41FFFF"
        borderRadius="2rem"
        boxShadow="0px 4px 0px 0px #41FFFF"
        className="card"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        position="relative"
        mb="2rem"
      ></MotionBox>
      <Box>
        <Text
          fontSize="3.2rem"
          fontWeight="600"
          letterSpacing="1.6px"
          textTransform="uppercase"
          color="#fff"
          textAlign="center"
          display="block"
          mb="1.5rem"
        >
          ASD
        </Text>
        <Text
          fontSize="2rem"
          fontWeight="400"
          letterSpacing="1px"
          textTransform="uppercase"
          color="#fff"
          textAlign="center"
          display="block"
        >
          CEO
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
