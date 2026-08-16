import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import image1 from "@/assets/images/image1.jpg";
import { posts } from "@/assets/assets";
import PostCard from "@/components/PostCard";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Box as="section" className="hero" py={12} px={4}>
        <Container>
          <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
            <Box flexGrow={1}>
              <Image h="full" w="900px" src={image1} alt="Post Image" />
            </Box>
            <Box flexGrow={1} textAlign={{ base: "center", md: "start" }}>
              <Span fontSize={14} color="var(--paragraph)">
                <Badge colorPalette="green" px={2}>
                  Featured
                </Badge>{" "}
                March 24, 2026
              </Span>
              <Heading
                fontWeight={700}
                fontSize={{ base: "3xl", lg: "5xl" }}
                fontFamily="'Source Serif 4'"
                lineHeight={1.1}
                color="var(--primary-base)"
                my={4}
              >
                The Architecture of{" "}
                <Span display="block">Silence: Designing for</Span> Deep Focus
              </Heading>
              <Text color="var(--paragraph)" lineHeight={2} mb={4}>
                In an era of constant digital noise, we explore how physical and
                digital spaces are being reimagined to protect our most valuable
                asset: human attention.
              </Text>
              <Button className="main-button" px={8} size="xl">
                Read The Story
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Recent Thoughts */}
      <Box as="section" className="recent-thoughts" py={12} px={4}>
        <Container>
          <Box className="head" mb={6}>
            <Heading
              fontWeight={700}
              mb={2}
              fontFamily="'Source Serif 4'"
              fontSize="3xl"
              color="var(--neutral-900)"
            >
              Recent Thoughts
            </Heading>
            <Text color="var(--paragraph)" fontSize={14}>
              Deep dives into culture, technology, and design.
            </Text>
          </Box>

          <SimpleGrid mb={4} gap={4} columns={{ base: 1, md: 2, lg: 3 }}>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                category={post.category}
                image={post.image}
                date={post.date}
                description={post.description}
                id={post.id}
                title={post.title}
              />
            ))}
          </SimpleGrid>

          <Button
            size="xl"
            className="main-button-outline"
            px={8}
            mt={8}
            mx="auto"
            display="flex"
            w="fit"
            asChild
          >
            <Link href="/posts">Load More Posts</Link>
          </Button>
        </Container>
      </Box>

      {/* The Sunday Edition */}
      <Box className="sunday-edition" bgColor="#F2F4F6" mb={12} py={12} px={4}>
        <Container>
          <Box textAlign="center" mb={6}>
            <Heading
              fontFamily="'Source Serif 4'"
              fontWeight={700}
              fontSize="3xl"
              color="var(--neutral-900)"
              mb={4}
            >
              The Sunday Edition
            </Heading>
            <Text
              maxW="500px"
              lineHeight={2}
              mx="auto"
              textAlign="center"
              color="var(--paragraph)"
              fontSize={15}
            >
              Join 25,000+ readers who receive our curated selection of weekly
              long-reads and intellectual deep-dives. No spam, just substance.
            </Text>
          </Box>

          <Box as="form" mx="auto" maxW="500px" display="flex" gapX={4}>
            <Input bgColor="#F7F9FB" placeholder="Email Address" ps={4} />
            <Button className="main-button" px={6} type="submit">
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
