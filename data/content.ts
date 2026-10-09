// Edit this file to change what appears on the site.
export const profile = {
  name: "Fathima Shifa K",
  title: "Full Stack Developer",
  headline: "I build React and Node.js storefronts: product lists, detail pages, carts and sign-in.",
  about:
    "I'm a full stack developer from Kannur, Kerala. I build responsive e-commerce applications with React.js, Redux and Bootstrap, back them with Node.js and MongoDB, and use TypeScript for type safety and easier maintenance. I manage my code with Git and GitHub.",
  location: "Kannur, Kerala",
  phone: "+91 8606264533",
  github: "https://github.com/fathimashifa-k",
  linkedin: "https://www.linkedin.com/in/fathima-shifa-6383a4378",
};

export const storefront = [
  { tab: "Product list", text: "Product listing pages in a responsive front end built with React.js and Bootstrap.", ui: "list" },
  { tab: "Product detail", text: "Detail pages for individual products, part of the e-commerce apps I've built.", ui: "detail" },
  { tab: "Cart", text: "Cart management, with Redux holding product and cart data in one place.", ui: "cart" },
  { tab: "Sign in", text: "User authentication, supported by a Node.js and MongoDB backend.", ui: "auth" },
] as const;

export const projects = [
  {
    name: "E-Commerce Application with Redux",
    summary: "A React e-commerce app that uses Redux to manage product and cart data. Set up with Create React App for easy development and deployment.",
    tech: ["React", "Redux", "Create React App"],
  },
  {
    name: "E-Commerce Application",
    summary: "A React-based e-commerce website with a responsive front end. I configured the project setup and build scripts for smooth development and deployment.",
    tech: ["React"],
  },
  {
    name: "Flipkart Clone (Static Frontend)",
    summary: "The Flipkart homepage layout recreated in pure HTML, with responsive components and content organised to mirror the storefront.",
    tech: ["HTML"],
  },
  {
    name: "Amazon Clone",
    summary: "Amazon's homepage recreated in HTML as a responsive front-end mockup with semantic markup, focused on layout accuracy.",
    tech: ["HTML"],
  },
];

export const experience = [
  "Built responsive websites using React.js, Redux, and Bootstrap.",
  "Implemented product list, product detail pages, cart management, and user authentication.",
  "Developed a backend using Node.js and MongoDB for efficient data handling.",
  "Applied TypeScript for improved type safety and maintainability.",
  "Managed source code with Git and deployed projects on GitHub.",
];

export const highlights = [
  "Built and deployed multiple e-commerce applications using modern web technologies.",
  "Completed self-paced training on frontend development and JavaScript frameworks.",
];

export const skills = [
  { group: "Front end", items: ["React.js", "Next.js", "Redux"] },
  { group: "Languages and libraries", items: ["JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap"] },
  { group: "Backend and databases", items: ["Node.js", "MongoDB", "PostgreSQL", "SQL"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

export const education = { course: "Plus Two (Humanities)", result: "Completed with Distinction", years: "2022 – 2023" };
