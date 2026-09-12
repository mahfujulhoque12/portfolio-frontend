import React from "react";
import { motion } from "framer-motion";
import me from "../../public/badon.jpeg";

export default function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="w-full bg-[#0B0F17] py-10  md:py-15 border border-t-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        {/* Left: framed photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative w-full max-w-sm mx-auto md:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="absolute -inset-3 border border-[#E3B341]/40 rounded-lg -z-0"
          />

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden border border-[#1E2530] bg-[#0D1320] aspect-[4/5] flex items-center justify-center z-10"
          >
            {/* Replace src with your own photo */}
            <img
              src={me}
              alt="Portrait"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right: text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-mono text-[13.5px] text-[#E3B341] mb-3"
          >
            01. About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-6"
          >
            A little about me
          </motion.h2>

          <div className="space-y-4 text-[15.5px] text-[#9AA4B2] leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My journey into software development started in 2022, when I wrote
              my first lines of code. What began as curiosity gradually turned
              into something I genuinely wanted to pursue. In 2023, I got my
              first internship opportunity through my institute, where I started
              gaining practical experience and learned how software is actually
              built beyond the classroom.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              In 2024, I joined Software Innovations as an intern and later
              transitioned into a Junior Frontend Developer role after
              completing my internship. I spent around 1.3 years there, working
              on real-world applications, building interfaces, integrating APIs,
              fixing bugs, and gradually taking on more responsibility as a
              developer.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              After that, I joined Innovia Tech on a 6-month contract, where I
              continued working on production projects and strengthening my
              frontend and full-stack development skills. I’m currently working
              at WezApps Limited, where I continue to build and improve
              real-world applications using technologies like React, Next.js,
              Node.js, Python, MongoDB, and PostgreSQL.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Looking back, it started with simply writing my first line of
              code. Since then, each project, bug, deployment, and broken build
              has taught me something new—and I’m still enjoying the process of
              figuring out what makes software work better.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
