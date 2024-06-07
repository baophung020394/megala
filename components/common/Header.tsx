"use client";

import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useDimensions } from "../hooks/use-dimensions";
import { Navigation } from "../MenuMobile/Navigation";
import { MenuToggle } from "../MenuMobile/MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header({
  aboutUsSectionRef,
  portfolioSectionRef,
  contactSectionRef,
  teamSectionRef,
}: {
  aboutUsSectionRef: React.RefObject<HTMLDivElement>;
  portfolioSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
  teamSectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const logo = "/assets/images/logo.png";
  const bottomLine = "/assets/images/bottom_line.png";

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <VStack
      position="absolute"
      top="0"
      w="100%"
      zIndex="3"
      background={`url(${bottomLine}) 100% 100% no-repeat`}
      backgroundSize="contain"
      paddingBottom="30px"
    >
      <Container maxW="1920px" position="relative" zIndex="2" p={4}>
        <Box
          padding="3rem 11rem 0"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            order={{
              base: 1,
              lg: 0,
            }}
          >
            <Image src={logo} alt="" width={189} height={51} />
          </Box>
          <Box
            display={{
              base: "none",
              lg: "flex",
            }}
          >
            <Text
              mr="50px"
              textAlign="right"
              fontSize="16px"
              fontWeight="400"
              color="#fff"
              cursor="pointer"
              textTransform="uppercase"
              onClick={() => handleScrollToSection(aboutUsSectionRef)}
            >
              About Us
            </Text>

            <Text
              mr="50px"
              textAlign="right"
              fontSize="16px"
              fontWeight="400"
              color="#fff"
              cursor="pointer"
              textTransform="uppercase"
              onClick={() => handleScrollToSection(portfolioSectionRef)}
            >
              Portfolio
            </Text>

            <Text
              mr="50px"
              textAlign="right"
              fontSize="16px"
              fontWeight="400"
              color="#fff"
              cursor="pointer"
              textTransform="uppercase"
              onClick={() => handleScrollToSection(contactSectionRef)}
            >
              Contact
            </Text>

            <Text
              mr="50px"
              textAlign="right"
              fontSize="16px"
              fontWeight="400"
              color="#fff"
              cursor="pointer"
              textTransform="uppercase"
              onClick={() => handleScrollToSection(teamSectionRef)}
            >
              Team
            </Text>
          </Box>

          <Box
            display={{
              base: "block",
              lg: "none",
            }}
          >
            <motion.nav
              className="nav-mobile"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <motion.div className="background" variants={sidebar} />
              <Navigation
                aboutUsSectionRef={aboutUsSectionRef}
                portfolioSectionRef={portfolioSectionRef}
                teamSectionRef={teamSectionRef}
                contactSectionRef={contactSectionRef}
                handleScrollToSection={handleScrollToSection}
              />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </Box>
        </Box>
      </Container>
    </VStack>
  );
}

export default Header;
