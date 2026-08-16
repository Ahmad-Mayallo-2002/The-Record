import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center h="100vh">
        <Spinner
          w={"64px"}
          h={"64px"}
          borderWidth={5}
          borderColor="var(--primary-base)"
          borderTopColor="transparent"
          animationDuration="750ms"
        />
      </Center>
    </>
  );
}
