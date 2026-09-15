import saad from "../../public/projects/saad.png";
import gdg from "../../public/projects/gdg.png";
import alarafat from "../../public/projects/alarafat.png";
import innovia from "../../public/projects/innovia.png";
import agamir from "../../public/projects/global.png";
import wezapps from "../../public/projects/wez.png";

import bexon from "../../public/projects/bexon.png";
import the from "../../public/projects/the.png";
import food from "../../public/projects/food.png";
import home from "../../public/projects/Home.png";

export const projectData = [
  {
    _id: 1,
    title: "Sadd Kitchenette — Modern Filipino Dining Experience",
    image: saad,
    description:
      "Sadd Kitchenette is a comprehensive restaurant management and ordering platform built for a Philippines-based restaurant business. The project includes a modern customer-facing website, dedicated POS system, and powerful admin dashboard designed to streamline food ordering, restaurant operations, and business management. Customers can browse the menu and place orders for **dine-in, takeout, and other ordering options**, while the restaurant team can manage orders, products, branches, and daily operations through the POS and dashboard. We also developed a **dedicated grocery platform** as a separate part of the ecosystem, allowing the business to manage and sell grocery products independently. The system includes **inventory management**, branch-wise POS configuration, product and order management, and **role-based access control (RBAC)** to ensure each staff member has access only to the features and operations relevant to their role. The overall platform was designed to provide a scalable and centralized solution for managing multiple restaurant branches and business operations.",
    technologies: ["Next.js", "React.js", "Typescript", "Laravel", "MySQL"],
    liveUrl: "https://saadskitchenette.com/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 2,
    title: "Google Developer Group Dhaka",
    image: gdg,
    description:
      "A professional website developed for **Google Developer Group (GDG) Dhaka**, a developer community based in Dhaka, Bangladesh. I was responsible for the project from the initial design phase through development, transforming the complete concept and UI design into a responsive, modern, and production-ready web experience. The platform includes a public-facing frontend for showcasing events, community activities, announcements, and developer-focused content, along with a dedicated management dashboard for handling and managing platform data and content. For the frontend, **Next.js** was used to build a fast, scalable, and SEO-friendly user experience, while the dashboard was developed using **React.js**. The backend was built with **Laravel**, providing APIs and business logic to support the frontend and administrative operations. This project was developed as part of my professional work at the company, where I contributed across the complete workflow—from **UI/UX design and frontend development to API integration and overall implementation",
    technologies: ["Next.js", "React.js", "Typescript", "Laravel", "MySQL"],
    liveUrl: "https://gdgdhaka.org",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 3,
    title: "Alarafat Oasis",
    image: alarafat,
    description:
      "A feature-rich e-commerce platform designed to provide a seamless shopping experience while giving administrators complete control over products, pricing, discounts, and promotional campaigns. Users can browse products, add items to their cart, and complete their purchases through a streamlined and user-friendly interface. The platform includes a flexible **coupon and discount management system** with multiple business rules and conditions, allowing administrators to create targeted promotions based on products, categories, order values, customer eligibility, usage limits, and other configurable criteria. The system automatically validates these conditions and applies the appropriate discount during checkout. The project also focuses on scalable product management, dynamic pricing, cart and checkout functionality, and a smooth overall shopping experience, making it suitable for handling complex real-world e-commerce requirements",
    technologies: [
      "Next.js",
      "React.js",
      "Typescript",
      "Node",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://www.alarafatoasis.com/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 4,
    title: "Innovia Edge- Agencey Website",
    image: innovia,
    description:
      "A modern and dynamic agency website developed to showcase the company’s services, expertise, portfolio, and digital solutions through a polished and engaging online presence. The website features a responsive interface, smooth user experience, and structured content designed to effectively communicate the agency’s capabilities and attract potential clients. Alongside the public-facing website, a dedicated **admin dashboard** was developed to manage website content, projects, services, and other business-related information efficiently. The system follows a scalable architecture, allowing the agency to update and manage its digital presence without requiring direct code changes. The frontend was built with **Next.js**, while the management dashboard was developed using **React.js**. The backend was powered by **Node.js and Express.js**, with **MongoDB** used for data management and storage. This project demonstrates the implementation of a complete, full-stack agency platform from frontend experience to backend management.",
    technologies: [
      "Next.js",
      "React.js",
      "Typescript",
      "Node",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://innoviaedge.com/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 5,
    title: "Wezapps- Our New Website",
    image: wezapps,
    description:
      "A modern and professional company website designed and developed to strengthen the company’s digital presence and showcase its services, expertise, projects, and capabilities. I was responsible for the complete design and development process, transforming the initial concepts into a responsive, visually engaging, and production-ready website. The website is currently deployed on **Vercel** for testing and final review and will be officially launched on the company’s production domain very soon. The project focuses on delivering a clean user experience, responsive design, smooth interactions, and a scalable frontend architecture that can support the company’s future digital growth. This project is one of the company’s internal initiatives, where I took a leading role in the **UI/UX design and frontend development**, ensuring the final product reflects the company’s brand identity and professional standards",
    technologies: ["React.js", "Typescript"],
    liveUrl: "https://softro-sigma.vercel.app/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 6,
    title: "Agamir Global",
    image: agamir,
    description:
      "A dedicated visa and immigration platform focused exclusively on Malaysia, designed to help individuals explore and apply for various visa-related services. The platform provides information and assistance for **student visas and other visa categories**, helping prospective applicants navigate the process and understand the available opportunities in Malaysia. Our team is currently working on the project, with a focus on creating a professional, user-friendly, and informative digital experience. The platform is **currently under development**, with additional features and functionality being implemented to support users throughout their visa application journey. The project is being developed with scalability and ease of use in mind, ensuring that users can easily access relevant visa information, explore available services, and connect with the appropriate support for their application needs.",
    technologies: ["React.js", "Typescript"],
    liveUrl: "https://malasiya.vercel.app/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 7,
    title: "Bexon - Template",
    image: bexon,
    description:
      "An in-house web template currently being designed and developed as part of our company’s internal product initiative. The project is focused on creating a modern, flexible, and reusable website template that can be adapted for different business and client requirements. Our team is working on the UI/UX, frontend structure, reusable components, and overall functionality to ensure the template is scalable, responsive, and production-ready. The project is **currently under development**, with additional features and refinements being implemented before its final release.",
    technologies: ["Next.js", "Typescript"],
    liveUrl: "https://malasiya.vercel.app/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 8,
    title: "THE Station",
    image: the,
    description:
      "A modern and engaging website developed for a music academy to showcase its courses, programs, instructors, events, and musical learning opportunities. The platform is designed to provide students and visitors with an easy way to explore available programs and learn more about the academy. The project focuses on creating an attractive, responsive, and user-friendly digital experience that reflects the academy’s creative identity while making important information easily accessible. The website is **currently under development**, with additional features and improvements being implemented before its official launch",
    technologies: ["React.js", "Typescript"],
    liveUrl: "https://the-station-mu.vercel.app/",
    githubUrl: "",
    type: "company",
  },
  {
    _id: 9,
    title: "Food Delivery Management System",
    image: food,
    description:
      "A full-featured food delivery platform designed to provide a seamless ordering and real-time delivery management experience for customers, administrators, and delivery personnel. Users can create accounts, browse available food items, place orders, and track their orders through different stages such as **Pending, Processing, Out for Delivery, and Delivered**.The system includes a smart delivery assignment workflow. Once an administrator marks an order as **Out for Delivery**, available delivery personnel within a **5 km radius** of the relevant location can view and accept the delivery. The delivery boy can then navigate from their current location to the customer’s location using the integrated location and tracking functionality.For secure delivery confirmation, the system generates a verification code and sends it to the customer’s **Gmail address**. The delivery person must obtain the code from the customer and verify it through the system before the order can be marked as successfully delivered.The platform combines **order management, delivery tracking, location-based delivery assignment, customer authentication, and OTP-based delivery verification** to create a complete end-to-end food delivery workflow.",
    technologies: ["Next.js", "Typescript", "Node", "Express", "MongoDb"],
    liveUrl: "https://food-delivery-frontned.vercel.app/",
    githubUrl: "https://github.com/mahfujulhoque12/Food_delivery-Frontned",
    githubUrlBackend:
      "https://github.com/mahfujulhoque12/Food_delivery_backend",
    type: "personal",
  },
  {
    _id: 10,
    title: "Real Estate showcase platform",
    image: home,
    description:
      "A modern **Real Estate Showcase Platform** designed to help property businesses showcase and manage their available land and real estate listings through a professional digital platform. Administrators can add and manage land listings with complete information, including property details, location, pricing, images, specifications, and other relevant information.Users can explore available properties, view detailed information, compare their options, and find properties that match their requirements. When a user is interested in a particular property, they can contact the administrator or property representative to discuss the next steps, arrange further communication, and proceed with the purchasing process.The platform provides a streamlined experience from **property discovery and detailed listing management to customer inquiry and purchase coordination**, making it easier for both property owners and potential buyers to connect and move forward with real estate transactions.",
    technologies: ["Next.js", "Typescript", "Node", "Express", "MongoDb"],
    liveUrl: "https://real-estate-frontend-under-developm.vercel.app/",
    githubUrl:
      "https://github.com/mahfujulhoque12/Real-Estate-Frontend-under-development-",
    githubUrlBackend: "https://github.com/mahfujulhoque12/backend-realestate",
    type: "personal",
  },
];
