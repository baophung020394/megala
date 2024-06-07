import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import AnimatedSection from "../AnimatedSection";
import useWindowHeight from "../hooks/useWindowHeight";

function AboutUsSection() {
  const windowHeight = useWindowHeight();
  const aboutImage = "/assets/images/about_image.png";
  const background = "/assets/images/background_about_us.png";
  const star = "/assets/images/start.png";

  return (
    <VStack
      minH={windowHeight}
      background={`url(${background}) lightgray 50% / cover   no-repeat`}
    >
      <Container maxW="1248px" margin="0 auto" padding="10.5rem 3rem 16rem">
        <Grid
          templateColumns={{
            base: "1fr", // < 768px
            md: "repeat(2, 1fr)", // >= 768px
          }}
          gap={6}
          width="100%"
          margin="0 auto"
        >
          <GridItem>
            <Text
              fontSize="6.4rem"
              fontWeight="600"
              textTransform="uppercase"
              color="#fff"
              mb="6.7rem"
              background="linear-gradient(92deg, #EBEBEB 0%, #FFF 22.39%, #D4D4D4 51.5%, #FFF 81.53%, #D8D8D8 100%)"
              backgroundClip="text"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                left: "-140px",
                bottom: 0,
                backgroundColor: "#54FFFF",
                zIndex: 1,
                width: "100%",
                maxWidth: "360px",
                height: "10px",
              }}
            >
              ABOUT US
            </Text>
            <Box mb="8rem" display="flex" pl="1rem">
              <Image
                src={star}
                alt="Star"
                width={50}
                height={50}
                objectFit="cover"
                mr="1.5rem"
              />
              <Text fontSize="2.2rem" fontWeight="400" color="#FFFFFF">
                Established and operating for more than four years, the Megala
                Ventures has become increasingly mature and professional. We
                have researched, invested in, and supported over 100
                cryptocurrency projects. Some projects have achieved great
                success, including AIT Protocol, Star Atlas, Casper, and
                SubQuery.
              </Text>
            </Box>
            <Box display="flex">
              <Image
                src={star}
                alt="Star"
                width={50}
                height={50}
                objectFit="cover"
                mr="1.5rem"
              />
              <Text fontSize="2.2rem" fontWeight="400" color="#FFFFFF">
                With strong financial resources, major cryptocurrency partners
                and a large community around the world, Megala will be the
                perfect place for new cryptocurrency projects to place their
                trust, cooperate and develop.
              </Text>
            </Box>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml="9.5rem"
          >
            {/* <Image
              src={aboutImage}
              alt="About Us Image"
              height={441}
              width={556}
              objectFit="contain"
            /> */}
            <AnimatedSection />
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  );
}

export default AboutUsSection;
