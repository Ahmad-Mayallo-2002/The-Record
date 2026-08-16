import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

function ContactPage() {
  const { Label, Root } = Field;

  return (
    <>
      <Box
        as="section"
        bgColor="var(--bg-primary)"
        className="get-in-touch"
        py={12}
        px={4}
      >
        <Container>
          <Box mb={4}>
            <Heading
              fontWeight={700}
              fontFamily="'Source Serif 4'"
              mb={4}
              fontSize="4xl"
              color="var(--neutral-900)"
            >
              Get in Touch
            </Heading>
            <Text
              color="var(--paragraph)"
              fontSize={14}
              lineHeight={2}
              maxW={500}
            >
              We value thoughtful discourse. Whether you have a question about
              our archives, a press inquiry, or simply wish to share your
              thoughts on a recent piece, our team is listening.
            </Text>
          </Box>

          <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
            <VStack
              gap={3}
              as="form"
              bgColor="#fff"
              border="1px solid #C1C8C4"
              flexGrow={1}
              p={6}
            >
              <Root>
                <Label color="var(--paragraph)" fontSize={13}>
                  Full Name
                </Label>
                <Input
                  bgColor="var(--bg-input)"
                  placeholder="Full Name"
                  borderColor="#C1C8C4"
                  ps={4}
                />
              </Root>
              <Root>
                <Label color="var(--paragraph)" fontSize={13}>
                  Email Address
                </Label>
                <Input
                  bgColor="var(--bg-input)"
                  placeholder="Email Address"
                  borderColor="#C1C8C4"
                  ps={4}
                />
              </Root>
              <Root>
                <Label color="var(--paragraph)" fontSize={13}>
                  Your Message
                </Label>
                <Textarea
                  placeholder="Email Address"
                  ps={4}
                  pt={3}
                  bgColor="var(--bg-input)"
                  borderColor="#C1C8C4"
                  maxLength={5000}
                  resize="none"
                  h="150px"
                />
              </Root>
              <Button
                type="submit"
                px={4}
                alignSelf="start"
                className="main-button"
              >
                Send Message
              </Button>
            </VStack>
            <Box flexGrow={1}>
              <Box className="our-editorial-office">
                <Heading
                  fontWeight={700}
                  fontFamily="'Source Serif 4'"
                  color="var(--neutral-900)"
                  fontSize="2xl"
                >
                  Our Editorial Office
                </Heading>

                <Text
                  display="flex"
                  gap={1}
                  fontSize={12}
                  my={4}
                  color="var(--paragraph)"
                >
                  <Icon mt={1}>
                    <FaLocationDot />
                  </Icon>
                  <span>
                    427 Broadsheet Lane, <br /> Literary District, <br />{" "}
                    London, UK EC1A 1BB
                  </span>
                </Text>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317719.58800755616!2d-0.43124482388122976!3d51.52817975833622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1786881475552!5m2!1sen!2seg"
                  width="100%"
                  height="300"
                  loading="lazy"
                ></iframe>
              </Box>

              <Box mt={12} className="connect-directly">
                <Heading
                  fontWeight={700}
                  fontFamily="'Source Serif 4'"
                  color="var(--neutral-900)"
                  fontSize="2xl"
                  mb={2}
                >
                  Connect Directly
                </Heading>
                <Text
                  color="var(--paragraph)"
                  fontSize={14}
                  display="flex"
                  alignItems="center"
                  mb={1}
                  gap={2}
                >
                  <Icon>
                    <MdMailOutline />
                  </Icon>
                  editor@therecord.com
                </Text>
                <Text
                  color="var(--paragraph)"
                  fontSize={14}
                  alignItems="center"
                  display="flex"
                  gap={2}
                >
                  <Icon>
                    <FaPhone />
                  </Icon>
                  +44 (0) 20 7946 0123
                </Text>
              </Box>

              <Box className="social-discourse" mt={6}>
                <Heading
                  fontWeight={700}
                  fontFamily="'Source Serif 4'"
                  color="var(--neutral-900)"
                  fontSize="2xl"
                  mb={2}
                >
                  Social Discourse
                </Heading>

                <Flex gap={4}>
                  <IconButton
                    size="xs"
                    bgColor="#eceef0"
                    color="#414846"
                    borderColor="#c1c8c4"
                  >
                    <Icon>
                      <FaXTwitter />
                    </Icon>
                  </IconButton>{" "}
                  <IconButton
                    size="xs"
                    bgColor="#eceef0"
                    color="#414846"
                    borderColor="#c1c8c4"
                  >
                    <Icon>
                      <FaFacebook />
                    </Icon>
                  </IconButton>{" "}
                  <IconButton
                    size="xs"
                    bgColor="#eceef0"
                    color="#414846"
                    borderColor="#c1c8c4"
                  >
                    <Icon>
                      <FaLinkedin />
                    </Icon>
                  </IconButton>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default ContactPage;
