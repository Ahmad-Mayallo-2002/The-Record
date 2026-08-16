import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import type { IconType } from "react-icons";
import { FaBookOpen, FaRegWindowMaximize } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import curator1 from "@/assets/images/curator-1.jpg";
import curator2 from "@/assets/images/curator-2.jpg";
import curator3 from "@/assets/images/curator-3.jpg";
import curator4 from "@/assets/images/curator-4.jpg";

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
    path: "/about",
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

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: FaBookOpen,
    title: "Deep Reading",
    description: `Optimized layouts designed specifically for prolonged focus and eye comfort.`,
  },
  {
    icon: MdVerified,
    title: "Verified Voices",
    description: `A curated roster of experts, scholars, and seasoned journalists.`,
  },
  {
    icon: FaRegWindowMaximize,
    title: "Quiet Interface",
    description: `A distraction-free environment without intrusive advertising or pop-ups.`,
  },
];

interface Curator {
  image: string;
  name: string;
  job: string;
  description: string;
}

export const curators: Curator[] = [
  {
    image: curator1,
    name: "Elena Vance",
    job: "Editor-in-Chief",
    description: `Elena has spent two decades navigating the
intersection of technology and sociology. She
believes in the power of a well-told story to
change perspectives.`,
  },
  {
    image: curator2,
    name: "Julian Thorne",
    job: "Creative Director",
    description: `Julian oversees the visual rhythm of The Record.
He is obsessed with typography and the invisible
architecture of a perfect reading experience.`,
  },
  {
    image: curator3,
    name: "Sarah Chen",
    job: "Strategy Lead",
    description: `Sarah ensures that our community thrives and
our mission remains sustainable. She is the
bridge between our readers and our future
roadmap.`,
  },
  {
    image: curator4,
    name: "Marcus Reed",
    job: "Senior Developer",
    description: `Marcus crafts the digital canvas on which our
stories live. He balances performance with
poetic interaction design to ensure seamless
immersion.`,
  },
];
