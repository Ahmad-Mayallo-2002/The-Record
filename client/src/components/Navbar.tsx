import { navLinks } from "@/assets/assets";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box
      as="nav"
      bgColor="var(--bg-primary)"
      p={4}
      borderBottom="1px solid #C1C8C4"
      className="navbar"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Link
          color="var(--primary-base)"
          fontWeight={700}
          fontFamily="'Source Serif 4'"
          fontSize="3xl"
          className="brand"
          href="/"
        >
          The Record
        </Link>

        <IconButton
          size="sm"
          className="main-button-outline"
          display={{ base: "flex", md: "none" }}
          onClick={handleToggle}
        >
          <FaBars />
        </IconButton>

        <List.Root
          display={{ base: open ? "flex" : "none", md: "flex" }}
          flexDir={{ base: "column", md: "row" }}
          w={{ base: "full", md: "fit" }}
          gap="4px 16px"
        >
          {navLinks.map((link, index) => (
            <List.Item
              borderBottom={{
                md:
                  link.path === pathname ? "3px solid var(--primary-base)" : "",
                base: "none",
              }}
              key={index}
            >
              <Link
                _hover={{ color: "var(--primary-base)" }}
                href={link.path}
                fontWeight={500}
                color={
                  link.path === pathname ? "var(--primary-base)" : "#505F76"
                }
                p="6px 16px"
              >
                {link.name}
              </Link>
            </List.Item>
          ))}
          <List.Item>
            <Button
              asChild
              size="sm"
              bgColor="var(--primary-base)"
              _hover={{ bgColor: "var(--primary-700)" }}
            >
              <Link href="/register" px={4}>
                Sign Up
              </Link>
            </Button>
          </List.Item>
        </List.Root>
      </Container>
    </Box>
  );
}
