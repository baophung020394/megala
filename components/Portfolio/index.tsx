"use client";

import React, { forwardRef, use, useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import Card from "../Card";
import { motion } from "framer-motion";
import useWindowHeight from "../hooks/useWindowHeight";

const MotionBox = motion(Box);

const PortfolioUsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const windowHeight = useWindowHeight();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
    click: { scale: 1.2, rotate: 0 },
  };

  const aboutImage = "/assets/images/about_image.png";
  const background = "/assets/images/background_porfolio.png";
  const star = "/assets/images/start.png";
  const logos = [
    { src: "/assets/images/logo/casper.png", alt: "Logo 1" },
    { src: "/assets/images/logo/star-atlas.png", alt: "Logo 1" },
    { src: "/assets/images/logo/prosper.png", alt: "Logo 1" },
    { src: "/assets/images/logo/gamefi.png", alt: "Logo 1" },
    { src: "/assets/images/logo/kilt.png", alt: "Logo 1" },
    { src: "/assets/images/logo/aleph-zero.png", alt: "Logo 1" },
    { src: "/assets/images/logo/dalarnia.png", alt: "Logo 1" },
    { src: "/assets/images/logo/blocklords.png", alt: "Logo 1" },
    { src: "/assets/images/logo/hackless.png", alt: "Logo 1" },
    { src: "/assets/images/logo/privasea.png", alt: "Logo 1" },

    { src: "/assets/images/logo/layer0.png", alt: "Logo 1" },
    { src: "/assets/images/logo/phaver.png", alt: "Logo 1" },
    { src: "/assets/images/logo/ait.png", alt: "Logo 1" },
    { src: "/assets/images/logo/moby.png", alt: "Logo 1" },
    { src: "/assets/images/logo/lava.png", alt: "Logo 1" },
    { src: "/assets/images/logo/farcana.png", alt: "Logo 1" },
    { src: "/assets/images/logo/outlanders.png", alt: "Logo 1" },
    { src: "/assets/images/logo/shardeum.png", alt: "Logo 1" },
    { src: "/assets/images/logo/ancient8.png", alt: "Logo 1" },
    { src: "/assets/images/logo/subquery.png", alt: "Logo 1" },

    { src: "/assets/images/logo/cere.png", alt: "Logo 1" },
    { src: "/assets/images/logo/starship.png", alt: "Logo 1" },
    { src: "/assets/images/logo/hopr.png", alt: "Logo 1" },
    { src: "/assets/images/logo/inspect.png", alt: "Logo 1" },
    { src: "/assets/images/logo/mydefipet.png", alt: "Logo 1" },
    { src: "/assets/images/logo/web3go.png", alt: "Logo 1" },
    { src: "/assets/images/logo/persistence.png", alt: "Logo 1" },
    { src: "/assets/images/logo/avalanche.png", alt: "Logo 1" },

    // Thêm tất cả các logo ở đây
  ];
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
          gap={12}
          width="100%"
          margin="0 auto"
        >
          <GridItem flex="1">
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
              Portfolio
            </Text>
          </GridItem>
        </Grid>

        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={24}
          >
            {logos.map((logo, index) => (
              <Box key={index} className="flex justify-center items-center">
                <MotionBox
                  key={index}
                  as="img"
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  variants={logoVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="click"
                  onHoverStart={() => setHoverIndex(index)}
                  onHoverEnd={() => setHoverIndex(null)}
                />
                {/* <Image src={logo.src} alt={logo.alt} /> */}
              </Box>
            ))}
          </Grid>
        </Box>

        <Grid
          ref={ref}
          templateColumns={{
            base: "1fr", // < 768px
            md: "repeat(2, 1fr)", // >= 768px
          }}
          gap={12}
          width="100%"
          margin="12rem auto 0"
        >
          <GridItem flex="1">
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
              Our Team
            </Text>
          </GridItem>
        </Grid>

        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)", // 1 cột cho màn hình < 500px
              md: "repeat(2, 1fr)", // 2 cột cho màn hình < 768px
              "2xl": "repeat(4, 1fr)", // 4 cột cho màn hình >= 768px
            }}
            gap={24}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Box key={index} className="flex justify-center items-center">
                <Card />
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </VStack>
  );
});

// function PortfolioUsSection() {}

PortfolioUsSection.displayName = "PortfolioUsSection";

export default PortfolioUsSection;
