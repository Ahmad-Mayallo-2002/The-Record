import { Center, Heading, Link } from "@chakra-ui/react";

export default function Error() {
  return (
    <>
      <Center flexDir="column" h="100vh">
        <Heading
          fontWeight="bold"
          fontSize="3xl"
          mb={2}
          color="var(--primary-base)"
        >
          404 Not Found
        </Heading>
        <Link
          href="/"
          color="blue.500"
          _hover={{ textDecoration: "underline" }}
        >
          Home Page
        </Link>
      </Center>
    </>
  );
}
