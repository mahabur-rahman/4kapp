import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";

const navbarData = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];

export default navbarData;

export const socialIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/",
    target: "blank",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/",
    target: "blank",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    url: "https://dribbble.com/",
    target: "blank",
  },
  {
    id: 4,
    icon: <FaBehance />,
    url: "https://www.behance.net/",
    target: "blank",
  },
  {
    id: 5,
    icon: <FaTwitter />,
    url: "https://twitter.com/",
    target: "blank",
  },
];
