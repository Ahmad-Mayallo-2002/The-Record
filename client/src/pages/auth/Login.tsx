import {
  Button,
  Center,
  Field,
  Input,
  Separator,
  Text,
  VStack,
  Heading,
  Link,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const { Root, Label, ErrorIcon, ErrorText } = Field;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();
  const onSubmit = async (data: LoginForm) => {
    console.log(data);
    navigate("/");
  };
  return (
    <Center bgColor="#F7F9FB" minH="calc(100vh - 78px)">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <VStack
          p={8}
          my={16}
          bgColor="#fff"
          rounded="md"
          boxShadow="sm"
          gap={5}
          align="stretch"
        >
          {/* Heading */}
          <VStack gap={1} textAlign="center">
            <Heading size="3xl" color="var(--primary-900)">
              Welcome Back
            </Heading>

            <Text fontSize="14px" color="var(--paragraph)">
              Continue your long-form journey.
            </Text>
          </VStack>

          {/* Email */}
          <Root invalid={!!errors.email}>
            <Label>Email Address</Label>
            <Input
              ps={4}
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <ErrorText>
                <ErrorIcon /> {errors.email.message}
              </ErrorText>
            )}
          </Root>

          {/* Password */}
          <Root invalid={!!errors.password}>
            <Label>Password</Label>
            <Input
              ps={4}
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 9,
                  message: "Password must be at least 9 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
              })}
            />
            {errors.password && (
              <ErrorText>
                <ErrorIcon /> {errors.password.message}
              </ErrorText>
            )}
          </Root>

          {/* Submit */}
          <Button
            type="submit"
            loading={isSubmitting}
            loadingText="Loading..."
            className="main-button"
            width="100%"
          >
            Sign In
          </Button>

          <Box pos="relative" my={2}>
            {/* OR separator */}
            <Separator />

            <Text
              position="absolute"
              left="50%"
              translate="-50%"
              alignSelf="center"
              bg="white"
              px={8}
              color="var(--paragraph)"
              fontSize="sm"
            >
              or
            </Text>
          </Box>

          {/* Google login */}
          <Button
            className="main-button-outline"
            type="button"
            variant="outline"
            width="100%"
          >
            <Icon>
              <FaGoogle />
            </Icon>{" "}
            Login with Google
          </Button>

          {/* Sign up */}
          <Text textAlign="center" color="gray.600">
            Don't have an account?{" "}
            <Link href="/register" color="blue.500" fontWeight="semibold">
              Create account
            </Link>
          </Text>
        </VStack>
      </form>
    </Center>
  );
}

export default LoginPage;
