import {
  Button,
  Center,
  Field,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Email = {
  email: string;
};

export default function ForgotPasswordPage() {
  const { Root, Label, ErrorIcon, ErrorText } = Field;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Email>();
  const navigate = useNavigate();

  const onSubmit = (data: Email) => {
    console.log(data);
    navigate("/verification-code");
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
            <VStack mb={3} gap={1} textAlign="center">
              <Heading size="3xl" color="var(--primary-900)">
                Forgot Password?
              </Heading>

              <Text fontSize="14px" color="var(--paragraph)">
                Enter your email address and we'll send you a code to reset your
                password.
              </Text>
            </VStack>

            <Root invalid={!!errors.email}>
              <Label>Email Address</Label>
              <Input
                placeholder="Enter Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                ps={4}
              />
              {errors.email && (
                <ErrorText>
                  <ErrorIcon /> {errors.email.message}
                </ErrorText>
              )}
            </Root>

            <Button
              display="flex"
              alignItems="center"
              gap={3}
              className="main-button"
              loading={isSubmitting}
              loadingText="Loading..."
              type="submit"
            >
              Send Code{" "}
              <Icon fontSize="10px">
                <FaArrowRight />
              </Icon>
            </Button>
          </VStack>
        </form>
      </Center>
    </>
  );
}
