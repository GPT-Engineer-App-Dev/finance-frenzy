import { Box, Container, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box gridColumn={{ md: "span 2" }}>
          <VStack align="start" spacing={4}>
            <Image src="/images/top-news.jpg" alt="Top News" borderRadius="md" />
            <Text fontSize="2xl" fontWeight="bold">Top News Headline</Text>
            <Text>Summary of the top news article goes here. This is a brief description to give readers an idea of what the article is about.</Text>
          </VStack>
        </Box>
        <Box>
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Market Data</Text>
            <Text>Market data and trends will be displayed here.</Text>
            <Text fontSize="xl" fontWeight="bold">Trending Topics</Text>
            <Text>List of trending topics will be displayed here.</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;