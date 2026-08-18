import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  Quote,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import about from "@/assets/images/about.jpg";
import { curators, features } from "@/assets/assets";

function AboutPage() {
  return (
    <>
      <Center
        bgImage={`url(${about})`}
        bgColor="rgb(0,0,0,.5)"
        bgBlendMode="darken"
        bgSize="cover"
        bgPos="center"
        flexDir="column"
        h="450px"
        className="hero"
        color="#fff"
      >
        <Text textTransform="uppercase">since 2026</Text>
        <Heading fontWeight={700} fontSize="3xl" my={4}>
          The pursuit of depth in an era of brevity.
        </Heading>
        <Text maxW="500px" textAlign="center" mx="auto">
          We built The Record for those who believe that the best stories
          require time to tell and space to breathe.
        </Text>
      </Center>

      {/* Our Mission */}
      <Box className="our-mission" bgColor="var(--bg-primary)" py={16} px={4}>
        <Container>
          <Heading
            fontWeight={700}
            fontSize="3xl"
            color="var(--neutral-900)"
            mb={4}
          >
            Our Mission
          </Heading>
          <Quote
            mb={4}
            fontWeight={500}
            color="var(--paragraph)"
            fontStyle="italic"
          >
            Information is abundant; insight is rare.
          </Quote>
          <Text my={6} color="var(--paragraph)" lineHeight={2}>
            In a digital landscape dominated by clickbait and ephemeral trends,
            The Record stands as a sanctuary for long-form immersion. We believe
            that intellectual engagement shouldn't be a chore, but a premium
            experience. Our mission is to provide a platform where authoritative
            voices can explore complex subjects without the pressure of brevity.
          </Text>
          <Text color="var(--paragraph)" lineHeight={2}>
            Every piece published in The Record undergoes a rigorous editorial
            process. We prioritize nuance, factual integrity, and high-quality
            prose above all else, ensuring that our readers come away not just
            informed, but enlightened.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} mt={6}>
            {features.map((feature, index) => (
              <GridItem key={index}>
                <Icon fontSize="4xl">
                  <feature.icon />
                </Icon>
                <Heading fontWeight={700} my={2} color="var(--neutral-900)">
                  {feature.title}
                </Heading>
                <Text color="var(--paragraph)">{feature.description}</Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* The Curators */}
      <Box className="curators" py={12} px={4}>
        <Container>
          <Heading fontWeight={700} fontSize="3xl" textAlign="center" mb={4}>
            The Curators
          </Heading>
          <Text
            textAlign="center"
            maxW="450px"
            mx="auto"
            lineHeight={2}
            fontSize="14px"
            color="var(--paragraph)"
            mb={6}
          >
            Meet the small but dedicated team behind the screen, working to
            bring you the best in long-form journalism.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
            {curators.map((curator, index) => (
              <GridItem key={index}>
                <Image w="full" src={curator.image} alt={curator.name} />
                <Heading
                  fontWeight={700}
                  color="var(--neutral-900)"
                  fontSize="2xl"
                  my={2}
                >
                  {curator.name}
                </Heading>
                <Text fontSize="14px" color="#01261F" fontWeight={700} mb={2}>
                  {curator.job}
                </Text>
                <Text fontSize="14px" color="var(--paragraph)" lineHeight={2}>
                  {curator.description}
                </Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={12} px={4} bgColor="var(--primary-900)">
        <Container>
          <Flex
            alignItems="center"
            gap={4}
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box textAlign={{ base: "center", md: "start" }}>
              <Heading color="#fff" fontWeight={700} fontSize="3xl" mb={4}>
                Have a story to tell?
              </Heading>
              <Text
                maxW="500px"
                mx={{ base: "auto", md: 0 }}
                color="#fff"
                fontSize="14px"
                lineHeight={2}
              >
                We are always looking for fresh perspectives and deep
                investigations. Join our roster of contributors or reach out
                with feedback.
              </Text>
            </Box>
            <div>
              <ButtonGroup>
                <Button color="#01261f" bgColor="#f7f9fb" px={4}>
                  Pitch a Story
                </Button>
                <Button
                  bgColor="transparent"
                  color="#fff"
                  borderColor="#fff"
                  px={4}
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </ButtonGroup>
            </div>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;
