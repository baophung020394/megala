// ApplySection.tsx
import {
  Box,
  Button,
  Container,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import ApplyForm from "../Forms/ApplyForm";
import useWindowHeight from "../hooks/useWindowHeight";

const ApplySection = forwardRef<HTMLDivElement>((props, ref) => {
  const windowHeight = useWindowHeight();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const background = "/assets/images/background_apply.png";

  return (
    <VStack
      minH={windowHeight}
      ref={ref}
      background={`url(${background}) lightgray 50% / cover no-repeat`}
    >
      <Container maxW="1248px" margin="0 auto" padding="10.5rem 0 16rem">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
          <Text
            fontSize="6.4rem"
            background="linear-gradient(92deg, #EBEBEB 0%, #FFF 22.39%, #D4D4D4 51.5%, #FFF 81.53%, #D8D8D8 100%)"
            backgroundClip="text"
            textTransform="uppercase"
            fontWeight="600"
            lineHeight="normal"
            textAlign="center"
            letterSpacing="3.2px"
            mt="22.5rem"
          >
            Apply to <br /> megala ventures
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
            margin="3rem auto 0"
            onClick={onOpen}
            _hover={{
              backgroundColor: "#41FFFF",
              color: "#242449",
            }}
          >
            <Text>Apply Now</Text>
          </Button>
        </Box>
        <ApplyForm isOpen={isOpen} onClose={onClose} />
      </Container>
    </VStack>
  );
});

// Thêm display name cho component
ApplySection.displayName = "ApplySection";

export default ApplySection;
