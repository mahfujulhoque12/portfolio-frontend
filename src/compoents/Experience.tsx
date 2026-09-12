import React from "react";
import { motion } from "framer-motion";
import img1 from "../../public/Wezapss.png";
import img2 from "../../public/innovia.webp";
import img3 from "../../public/si.png";

interface Job {
  company: string;
  logo?: any;
  role: string;
  duration: string;
  description: string;
  skills: string[];
}

const JOBS: Job[] = [
  {
    company: "Wezapps Limited",
    logo: img1,
    role: "Front End Developer",
    duration: "December 2025 — Current",
    description:
      "Working as a Frontend Developer, developing scalable and responsive web applications while contributing to backend development, REST API integration, database operations, and end-to-end feature implementation.",
    skills: [
      "Html",
      "Css",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "shadCn",
      "React Hook Form",
      "Zod",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDb",
      "PostgreSQL",
    ],
  },
  {
    company: "Innovia Tech",
    logo: img2,
    role: "Front End Developer",
    duration: "June 2025 — November 2025 (6 month contract)",
    description:
      "Worked as a Junior Frontend Developer, contributing to the development of responsive and user-friendly web applications. Collaborated with the team on UI implementation, API integration, bug fixing, and performance improvements. Also gained hands-on experience with modern frontend technologies and backend integration.",
    skills: [
      "Html",
      "Css",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "shadCn",
      "React Hook Form",
      "Zod",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDb",
    ],
  },
  {
    company: "Software Innovations",
    logo: img3,
    role: "Front End Developer",
    duration: "August 2024 — May 2025",
    description:
      "Joined as a Frontend Development Intern and later transitioned into a Junior Frontend Developer role. Contributed to building responsive and user-friendly web applications, working on UI development, API integration, bug fixing, and performance improvements. This role helped me build a strong foundation in modern frontend development and real-world software projects.",
    skills: [
      "Html",
      "Css",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "MongoDb",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillVariants = {
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

export default function Experience(): React.JSX.Element {
  return (
    <section
      id="experience"
      className="w-full bg-[#0B0F17] py-10  md:py-15 border border-t-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
            03. Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
            Where I've worked
          </h2>

          <p className="text-[15px] text-[#9AA4B2] max-w-xl mb-16 leading-relaxed">
            A quick look at the different companies and projects I've worked on.
          </p>
        </motion.div>

        <div className="relative pl-9">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1E2530]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {JOBS.map((job) => (
              <motion.div
                key={job.company}
                variants={itemVariants as any}
                className="relative"
              >
                {/* node */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "backOut",
                  }}
                  className="absolute -left-9 top-6 w-3.5 h-3.5 rounded-full border-2 border-[#E3B341] bg-[#0B0F17]"
                />

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-lg border border-[#1E2530] bg-[#0D1320] p-6 hover:border-[#E3B341]/40 transition-colors duration-150"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15,
                        ease: "easeOut",
                      }}
                      className="shrink-0 w-12 h-12 rounded-md border border-[#1E2530] bg-[#0B0F17] flex items-center justify-center overflow-hidden"
                    >
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-mono text-[13px] text-[#E3B341]">
                          {job.company.charAt(0)}
                        </span>
                      )}
                    </motion.div>

                    <div>
                      <h3 className="text-[17px] font-medium text-[#E6EDF3]">
                        {job.role}
                      </h3>

                      <p className="text-[14px] text-[#E3B341] mt-0.5">
                        {job.company}
                      </p>

                      <p className="font-mono text-[12.5px] text-[#7C879A] mt-1">
                        {job.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-[14.5px] text-[#9AA4B2] mt-5 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-[13px] font-medium text-[#E6EDF3] mb-2.5">
                      Skills:
                    </p>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-x-2 gap-y-2"
                    >
                      {job.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={skillVariants as any}
                          className="text-[12px] text-[#9AA4B2] border border-[#1E2530] rounded-md px-2.5 py-1"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
