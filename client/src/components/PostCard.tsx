import type { PostInfo } from "@/assets/assets";
import { Badge, Button, Card, Flex, Image, Link, Span } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function PostCard({
  category,
  date,
  description,
  id,
  image,
  title,
}: PostInfo) {
  const { Root, Body, Header, Title, Description } = Card;
  return (
    <>
      <Root>
        <Header p={3}>
          <Image rounded="md" src={image} alt={title} />
        </Header>
        <Body p={3} pt={0}>
          <Flex
            justifyContent="space-between"
            className="head"
            color="var(--paragraph)"
            fontSize={13}
            mb={2}
          >
            <Badge colorPalette="green" px={2}>
              {category}
            </Badge>
            <Span>{date.getMinutes() + 1} min ago</Span>
          </Flex>

          <Title
            fontFamily="'Source Serif 4'"
            color="var(--neutral-900)"
            fontWeight={700}
          >
            {title}
          </Title>
          <Description fontSize={13} my={2}>
            {description}
          </Description>
          <Button mt={1} px={6} w="fit" className="main-button" asChild>
            <Link href={`/posts/${id}`}>
              Read More <FaArrowRight />
            </Link>
          </Button>
        </Body>
      </Root>
    </>
  );
}
