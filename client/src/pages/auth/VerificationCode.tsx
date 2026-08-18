import {
  Button,
  Center,
  Heading,
  Icon,
  PinInput,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Code = {
  code: string;
};

export default function VerificationCodePage() {
  const { Root, HiddenInput, Control, Input } = PinInput;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Code>();
  const navigate = useNavigate();

  const onSubmit = (data: Code) => {
    console.log(data);
    navigate("/reset-password");
  };

  return (
    <>
      <Center className="auth-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          className="auth-form"
        >
          <VStack className="auth-box">
            <Icon
              mx="auto"
              p={3}
              bgColor="#ECEEF0"
              color="#01261F"
              boxSize="54px"
              rounded="lg"
            >
              <FaLock />
            </Icon>

            <VStack mb={3} gap={1} textAlign="center">
              <Heading size="3xl" color="var(--primary-900)">
                Enter Verification Code
              </Heading>

              <Text fontSize="14px" color="var(--paragraph)">
                We've sent a 4-digit code to your email. Enter it below to
                verify your account.
              </Text>
            </VStack>

            <Root invalid={!!errors.code}>
              <HiddenInput
                {...register("code", {
                  required: "Verification Code is Required",
                  maxLength: {
                    value: 4,
                    message: "Length of Code is 4",
                  },
                })}
              />
              <Control w="full">
                <Input index={0} flexGrow={1} />
                <Input index={1} flexGrow={1} />
                <Input index={2} flexGrow={1} />
                <Input index={3} flexGrow={1} />
              </Control>
            </Root>

            {errors.code && (
              <Text
                display="flex"
                alignItems="center"
                gap={".25rem"}
                fontSize="0.75rem"
                fontWeight={500}
                color="red.500"
              >
                <Icon boxSize="16px">
                  <MdError />
                </Icon>{" "}
                {errors.code.message}
              </Text>
            )}

            <Button
              className="main-button"
              loading={isSubmitting}
              loadingText="Loading..."
              type="submit"
            >
              Verify
            </Button>
          </VStack>
        </form>
      </Center>
    </>
  );
}
