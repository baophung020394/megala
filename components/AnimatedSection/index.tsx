// components/AnimatedSection.tsx
"use client";

import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const AnimatedSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const leftVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", duration: 0.5, delay: 1.8 }, // delay 1 second
    },
  };

  const rightVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", duration: 0.5, delay: 1.5 }, // delay 2 seconds
    },
  };

  const centerVariants = {
    hidden: { y: "-1000vh" },
    visible: {
      y: 0,
      transition: { type: "spring", duration: 0.5, delay: 1 }, // no delay
    },
  };

  return (
    <VStack
      ref={ref}
      background="transparent"
      padding="50px"
      align="center"
      justify="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <MotionBox
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftVariants}
          position="absolute"
          left="-8rem"
          top="8rem"
        >
          <Image
            src="/assets/images/e-right.png"
            alt="Left Part"
            width="13rem"
            height="33.4rem"
          />
        </MotionBox>
        <MotionBox
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={centerVariants}
          zIndex={9}
        >
          <Image
            src="/assets/images/e-center.png"
            alt="Center Part"
            width="33.9rem"
            height="39rem"
          />
        </MotionBox>
        <MotionBox
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightVariants}
          position="absolute"
          right="-6rem"
          top="10rem"
        >
          <Image
            src="/assets/images/e-left.png"
            alt="Right Part"
            width="13rem"
            height="33rem"
          />
        </MotionBox>
      </Box>
    </VStack>
  );
};

export default AnimatedSection;
