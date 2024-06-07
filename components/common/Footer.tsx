import { Box, Container, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Footer() {
  const footerImg = "/assets/images/footer.png";

  return (
    <VStack
      background={`url(${footerImg})  no-repeat`}
      backgroundPosition="center"
      backgroundSize="contain"
    >
      <Container maxW="1248px" margin="0 auto" padding="5rem 0 5rem">
        {/* <Box>
          <Image src={footerImg} alt="Footer" width={100} height={100} />
        </Box> */}
      </Container>
    </VStack>
  );
}

export default Footer;
