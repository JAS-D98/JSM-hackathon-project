import { facebook, instagram, twitter } from "../assets/images";

export const footerLinks = [
  {
    title: "Links",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-us" },
      { name: "Schools", link: "/schools" },
      { name: "Contact Us", link: "/contact-us" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Write Article", link: "/articles-write" },
      { name: "Register Your School", link: "/schools-register" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "schoolsmine@mail.com", link: "mailto:jasperwambugu@gmail.com" },
      { name: "+254 706 235 398", link: "tel:+254 706 235 398" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", name: "schoolsmine@fb" },
  { src: twitter, alt: "x logo", name: "schoolsmine@x" },
  { src: instagram, alt: "instagram logo", name: "schoolsmine@ig" },
];
