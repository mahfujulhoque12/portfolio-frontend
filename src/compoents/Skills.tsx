import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Palette,
  Server,
  Database,
  Cloud,
} from "lucide-react";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: Code2,
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
  },
  {
    icon: Code2,
    title: "Computer Science",
    items: ["DSA", "OOP", "SOLID", "Design Patterns", "System Design"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",

      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    icon: Palette,
    title: "Styling & Animation",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "shadcn/ui",
      "PrimeReact",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Firebase",
      "Resend",
      "Nodemailer",
      "Cloudinary",
      "ImgBB",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Netlify", "Render"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const tagVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Skills(): React.JSX.Element {
  return (
    <section
      id="skills"
      className="w-full bg-[#0B0F17] py-10  md:py-15 border border-t-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
            02. Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
            Tools I work with
          </h2>

          <p className="text-[15.5px] text-[#9AA4B2] max-w-xl mb-14 leading-relaxed">
            A mix of languages, frameworks, and tools I reach for when turning
            an idea into a working product.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              variants={cardVariants as any}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-[#1E2530] bg-[#0D1320] p-6 hover:border-[#E3B341]/40 transition-colors duration-150"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Icon size={18} className="text-[#E3B341]" />

                <h3 className="text-[15px] font-medium text-[#E6EDF3]">
                  {title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map((item) => (
                  <motion.span
                    key={item}
                    variants={tagVariants as any}
                    className="text-[12.5px] text-[#9AA4B2] border border-[#1E2530] rounded-md px-2.5 py-1"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
