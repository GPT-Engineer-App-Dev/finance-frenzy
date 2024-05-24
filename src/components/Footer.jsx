import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={10}>
      <Flex justify="space-around" wrap="wrap">
        <Link href="/contact" _hover={{ textDecoration: "none" }}>Contact</Link>
        <Link href="/privacy-policy" _hover={{ textDecoration: "none" }}>Privacy Policy</Link>
        <Link href="/terms-of-service" _hover={{ textDecoration: "none" }}>Terms of Service</Link>
      </Flex>
      <Text textAlign="center" mt={4}>&copy; 2023 Financial Times. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;