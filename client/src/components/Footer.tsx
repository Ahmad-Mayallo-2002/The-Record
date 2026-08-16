import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  List,
  Text,
} from "@chakra-ui/react";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <Box as="footer" bgColor="var(--bg-primary)">
      <Box p={4} className="privacy-policy">
        <Container>
          <Grid
            gap={4}
            textAlign={{ base: "center", md: "start" }}
            gridTemplateColumns={{ base: "1fr", md: "1fr 150px 150px" }}
          >
            <GridItem>
              <Heading
                fontFamily="'Source Serif 4'"
                fontSize={"3xl"}
                mb={2}
                fontWeight="bold"
                color="var(--primary-base)"
              >
                The Record
              </Heading>
              <Text
                fontSize={14}
                mx={{ base: "auto", md: 0 }}
                color="#414846"
                maxW="450px"
                lineHeight={1.7}
              >
                Dedicated to the pursuit of depth in an age of distraction.
                Built for long-form immersion and the slow appreciation of
                ideas.
              </Text>
            </GridItem>
            <GridItem>
              <Text
                mb={1}
                textTransform="uppercase"
                color="#ccc"
                letterSpacing={2}
                fontSize={14}
              >
                journal
              </Text>
              <List.Root fontSize={14} color="#414846">
                <List.Item>Archive</List.Item>
                <List.Item my={1}>RSS Feed</List.Item>
                <List.Item>Topics</List.Item>
              </List.Root>
            </GridItem>
            <GridItem>
              <Text
                mb={1}
                textTransform="uppercase"
                color="#ccc"
                letterSpacing={2}
                fontSize={14}
              >
                legal
              </Text>
              <List.Root fontSize={14} color="#414846">
                <List.Item mb={1}>Privacy Policy</List.Item>
                <List.Item>Terms of Service</List.Item>
              </List.Root>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box p={4} borderTop="1px solid #C1C8C4" className="foot">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gapY={2}
          flexDir={{ base: "column", md: "row" }}
        >
          <Text fontSize={14} color="#414846">
            &copy; 2026 The Record. Built for long-form immersion.
          </Text>
          <Flex gap={4}>
            <Icon fontSize={24}>
              <IoShareSocialSharp />
            </Icon>
            <Icon fontSize={24}>
              <MdMail />
            </Icon>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
