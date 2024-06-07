"use client";

import React from "react";
import { Box, Container, Grid, Text, VStack } from "@chakra-ui/react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionGridItem = motion(Box);

function StatisticsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <VStack ref={ref}>
      <Container
        maxW="1920px"
        position="relative"
        zIndex="2"
        padding="10rem 4rem 10.5rem"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          position="relative"
          zIndex="2"
          width="100%"
          maxW="1440px"
          margin="0 auto"
        >
          <MotionGridItem
            custom="left"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={{
              base: "4rem",
              lg: 0,
            }}
          >
            <Text
              fontSize="3.1rem"
              fontWeight="500"
              lineHeight="3.5rem"
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              Greatness is never achieved alone.
            </Text>
          </MotionGridItem>
          <MotionGridItem
            custom="right"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={{
              base: "4rem",
              lg: 0,
            }}
          >
            <Text
              fontSize="7.6rem"
              fontWeight="600"
              lineHeight="3.5rem"
              color="#6B67FF"
              mb="1.7rem"
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              <CountUp start={0} end={inView ? 200 : 0} duration={2} />+
            </Text>
            <Text
              lineHeight="2.2rem"
              fontSize="2.4rem"
              fontWeight="400"
              color="#939393"
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              Investment <br></br> Opportunities/year
            </Text>
          </MotionGridItem>
          <MotionGridItem
            custom="up"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={{
              base: "4rem",
              lg: 0,
            }}
          >
            <Text
              fontSize="7.6rem"
              fontWeight="600"
              lineHeight="3.5rem"
              color="#6B67FF"
              mb="1.7rem"
              textAlign="left"
            >
              <CountUp start={0} end={inView ? 80 : 0} duration={2} />+
            </Text>
            <Text
              lineHeight="2.2rem"
              fontSize="2.4rem"
              fontWeight="400"
              color="#939393"
              textAlign="left"
            >
              Companies
            </Text>
          </MotionGridItem>
          <MotionGridItem
            custom="down"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={{
              base: "4rem",
              lg: 0,
            }}
          >
            <Text
              fontSize="7.6rem"
              fontWeight="600"
              lineHeight="3.5rem"
              color="#6B67FF"
              mb="1.7rem"
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              X<CountUp start={0} end={inView ? 500 : 0} duration={2} />
            </Text>
            <Text
              lineHeight="2.2rem"
              fontSize="2.4rem"
              fontWeight="400"
              color="#939393"
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              Highest ROI
            </Text>
          </MotionGridItem>
        </Grid>
      </Container>
    </VStack>
  );
}

export default StatisticsSection;
