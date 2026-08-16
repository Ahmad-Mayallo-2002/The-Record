import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";

export interface NavLinks {
  name: string;
  path: string;
}

export const navLinks: NavLinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/aout",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];

export interface PostInfo {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  date: Date;
}

export const posts: PostInfo[] = [
  {
    id: "1",
    category: "Philosophy",
    date: new Date(),
    title: "The Art of the Slow Review",
    description:
      "Why our obsession with immediate takes is eroding our ability to appreciate complex works of art and literature.",
    image: image2,
  },
  {
    id: "2",
    category: "Technology",
    date: new Date(),
    title: "Beyond the Algorithm",
    description:
      "A critical look at the rise of algorithmic curation and its impact on the serendipity of human discovery in the modern web.",
    image: image3,
  },
  {
    id: "2",
    category: "Culture",
    date: new Date(),
    title: "The New Digital Broadsheet",
    description:
      "How long-form publishers are returning to their roots to create high-trust, low-noise environments for discerning readers.",
    image: image4,
  },
];
