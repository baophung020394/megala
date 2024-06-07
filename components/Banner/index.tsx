// Banner.tsx
import { Box, Button, Container, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AnimatedCubes from "../AnimatedCube";
import useWindowHeight from "../hooks/useWindowHeight";

const Banner: React.FC<{ scrollToApply: () => void }> = ({ scrollToApply }) => {
  const windowHeight = useWindowHeight();
  const background = "/assets/images/background_banner.png";
  const arrowDown = "/assets/images/arrow_down.png";

  return (
    <VStack
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      zIndex="1"
      pb="22rem"
    >
      <Box
        position="absolute"
        width="100%"
        top="0"
        left="0"
        minH={{
          base: "93rem",
          "2xl": `${windowHeight + 10}px`,
        }}
        maxH={{
          base: "93rem",
          "2xl": `${windowHeight + 10}px`,
        }}
      >
        <AnimatedCubes />
        <Image
          width="100%"
          height="100%"
          src={background}
          alt=""
          minH={{
            base: "93rem",
            "2xl": `${windowHeight + 10}px`,
          }}
          maxH={{
            base: "93rem",
            "2xl": `${windowHeight + 10}px`,
          }}
        />
        <Box
          position="absolute"
          bottom="2rem"
          right="5%"
          zIndex="3"
          display="flex"
          alignItems="center"
          cursor="pointer"
        >
          <Image w="2.4rem" h="2.4rem" src={arrowDown} alt="" />
          <Text color="#000" fontSize="2.1rem" fontWeight="400" ml="1rem">
            Scroll to read more
          </Text>
        </Box>
      </Box>
      <Container maxW="1248px" textAlign="center" zIndex={2}>
        <Text
          fontSize="9.6rem"
          // background="linear-gradient(92deg, #EBEBEB 0%, #FFF 22.39%, #D4D4D4 51.5%, #FFF 81.53%, #D8D8D8 100%)"
          background="linear-gradient(90deg, #AAA 0%, #FFF 34.5%, #FFF 51.5%, #FFF 66%, #AAA 100%)"
          backgroundClip="text"
          textTransform="uppercase"
          fontWeight="600"
          lineHeight="9.2rem"
          textAlign="center"
          mt="40rem"
          w="100%"
        >
          Let <br /> the Journey begin
        </Text>
        <Text
          fontSize="2.4rem"
          fontWeight="400"
          textAlign="center"
          color="#fff"
          padding="30px 0"
        >
          Megala Ventures is a leading capital fund in South East Asia. We focus
          on both primary and secondary markets, supporting web3 projects from
          their initial stages.
        </Text>

        <Button
          border="1px solid #41FFFF"
          borderRadius="1rem"
          backgroundColor="#242449"
          padding="1.8rem 1.95rem"
          fontSize="2.4rem"
          color="#fff"
          fontWeight="500"
          textTransform="capitalize"
          boxSizing="content-box"
          maxH="6.5rem"
          margin="0 auto"
          onClick={scrollToApply}
          _hover={{
            backgroundColor: "#41FFFF",
            color: "#242449",
          }}
        >
          <Text>Apply Now</Text>
        </Button>
      </Container>
    </VStack>
  );
};

export default Banner;
