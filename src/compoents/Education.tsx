import React from "react";
import { motion } from "framer-motion";
import usa from "../../public/usa.webp";
import bbp from "../../public/bbp.webp";

interface EducationItem {
  institute: string;
  logo?: string;
  degree: string;
  duration: string;
  grade?: string;
  description: string;
}

const EDUCATION: EducationItem[] = [
  {
    institute: "University Of South Asia",
    logo: usa,
    degree: "BSC, Computer Science and Engineering",
    duration: "April 2024 — Continue",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science and Engineering at the University of South Asia, with my final semester currently underway. Alongside my studies, I continue to build practical experience through real-world software development projects.",
  },
  {
    institute: "Brahmanbaria Polytechnic Institute",
    logo: bbp,
    degree: "Diploma, Computer Science and Technology",
    duration: "Aug 2018 — Mar 2023",
    grade: "3.33",
    description:
      "Completed a Diploma in Computer Science and Technology from Brahmanbaria Polytechnic Institute, gaining a strong foundation in programming, software development, and computer science fundamentals.",
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

export default function Education(): React.JSX.Element {
  return (
    <section
      id="education"
      className="w-full bg-[#0B0F17] py-10 md:py-15 border border-t-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
            06. Education
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
            My education
          </h2>

          <p className="text-[15px] text-[#9AA4B2] max-w-xl mb-16 leading-relaxed">
            Where I've studied and what I picked up along the way.
          </p>
        </motion.div>

        <div className="relative pr-9">
          {/* vertical line */}
          <div className="absolute right-[7px] top-2 bottom-2 w-px bg-[#1E2530]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {EDUCATION.map((item) => (
              <motion.div
                key={item.institute}
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
                  className="absolute -right-9 top-6 w-3.5 h-3.5 rounded-full border-2 border-[#E3B341] bg-[#0B0F17]"
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
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.institute}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <span className="font-mono text-[13px] text-[#E3B341]">
                          {item.institute.charAt(0)}
                        </span>
                      )}
                    </motion.div>

                    <div>
                      <h3 className="text-[17px] font-medium text-[#E6EDF3]">
                        {item.institute}
                      </h3>

                      <p className="text-[14px] text-[#E3B341] mt-0.5">
                        {item.degree}
                      </p>

                      <p className="font-mono text-[12.5px] text-[#7C879A] mt-1">
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-[13.5px] text-[#E6EDF3] mt-5">
                    <span className="font-medium">Grade:</span>{" "}
                    <span className="text-[#9AA4B2]">{item.grade ?? "—"}</span>
                  </p>

                  <p className="text-[14.5px] text-[#9AA4B2] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
