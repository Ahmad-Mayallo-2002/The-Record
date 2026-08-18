import {
  Button,
  Center,
  Field,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ResetPassword = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const { Root, Label, ErrorIcon, ErrorText } = Field;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ResetPassword>();
  const password = useWatch({
    control,
    name: "password",
  });
  const onSubmit = async (data: ResetPassword) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <Center className="auth-center">
      <form onSubmit={handleSubmit(onSubmit)} action="#" className="auth-form">
        <VStack className="auth-box">
          <VStack mb={3} gap={1} textAlign="center">
            <Heading size="3xl" color="var(--primary-900)">
              Set New Password
            </Heading>

            <Text fontSize="14px" color="var(--paragraph)">
              Create a new, strong password for your account.
            </Text>
          </VStack>

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

          {/* Confirm Password */}
          <Root invalid={!!errors.confirmPassword}>
            <Label>Confirm Password</Label>
            <Input
              ps={4}
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                minLength: {
                  value: 9,
                  message: "Password must be at least 9 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
                validate: (val) => val === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <ErrorText>
                <ErrorIcon /> {errors.confirmPassword.message}
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
            Set Password
          </Button>
        </VStack>
      </form>
    </Center>
  );
}
