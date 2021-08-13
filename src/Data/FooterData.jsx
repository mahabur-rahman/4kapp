import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";

const FooterAddress = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Find us",
    address: "1207 Dhaka, Bangladesh",
  },
  {
    id: 2,
    icon: <FaPhone />,
    title: "Call us",
    address: "+08801626924395",
  },
  {
    id: 3,
    icon: <FaRegEnvelope />,
    title: "Mail us",
    address: "annur4395@gmail.com",
  },
];

const usefulLinks = [
  {
    id: 1,
    title: "Home",
    visit: "/",
  },
  {
    id: 2,
    title: "Services",
    visit: "/blog",
  },
  {
    id: 3,
    title: "Contact",
    visit: "/contact",
  },
  {
    id: 4,
    title: "Our Services",
    visit: "/blog",
  },
  {
    id: 5,
    title: "Contact Us",
    visit: "/contact",
  },
  {
    id: 6,
    title: "About",
    visit: "/about",
  },
  {
    id: 7,
    title: "Portfolio",
    visit: "/projects",
  },
  {
    id: 8,
    title: "About Us",
    visit: "/about",
  },
  {
    id: 9,
    title: "Expert Team",
    visit: "/projects",
  },
  {
    id: 10,
    title: "Latest News",
    visit: "/blog",
  },
];

// copyright links

const copyrightLinks = [
  {
    id: 1,
    title: "Home",
    visit: "/",
  },
  {
    id: 2,
    title: "Terms",
    visit: "/",
  },
  {
    id: 3,
    title: "Privacy",
    visit: "/",
  },
  {
    id: 4,
    title: "Policy",
    visit: "/",
  },
  {
    id: 5,
    title: "Contact",
    visit: "/contact",
  },
];

export { FooterAddress, usefulLinks, copyrightLinks };
