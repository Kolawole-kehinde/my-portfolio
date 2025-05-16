// src/data/testimonialsData.js
const randomAvatar = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70 + 1)}`;

const testimonials = [
  {
    name: "Kolawole Kehinde",
    title: "Web Developer",
    company: "Freelance",
    feedback:
      "Kolawole is one of the most talented developers I've worked with. He communicates clearly, meets deadlines, and goes above and beyond expectations.",
    avatar: randomAvatar(),
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    company: "Creative Co.",
    feedback:
      "I loved working with Kolawole. He brings innovative ideas to the table and understands user-centered design deeply. Highly recommended!",
    avatar: randomAvatar(),
  },
  {
    name: "Samuel Ade",
    title: "Shopify Store Owner",
    company: "FitFashion",
    feedback:
      "Kolawole revamped my entire Shopify store. Now the design looks sharp, mobile-friendly, and sales have increased. Great job!",
    avatar: randomAvatar(),
  },
  {
    name: "Ada Eze",
    title: "Content Creator",
    company: "MediaFlow",
    feedback:
      "He understands branding, user flow, and can translate it into digital design perfectly. His designs are smooth, minimal, and clean.",
    avatar: randomAvatar(),
  },
  {
    name: "Tunde Ayeni",
    title: "CEO",
    company: "TechWave",
    feedback:
      "Exceptional in communication and delivery. We trusted Kolawole with multiple projects, and he never disappointed.",
    avatar: randomAvatar(),
  },
  {
    name: "Grace Bello",
    title: "Product Manager",
    company: "LaunchWise",
    feedback:
      "Everything was delivered on time. His code is clean and scalable. The entire experience was seamless and efficient.",
    avatar: randomAvatar(),
  },
];

export default testimonials;
