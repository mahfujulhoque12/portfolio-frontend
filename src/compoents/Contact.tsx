import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function Contact(): React.JSX.Element {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");

    // Replace this with your EmailJS / API call
    // Example: await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
    console.log(data);

    setTimeout(() => {
      setStatus("sent");
      reset();
    }, 900);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0B0F17] py-10 md:py-15 border border-t-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[13.5px] text-[#E3B341] mb-3">
            05. Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#E6EDF3] tracking-tight mb-4">
            Let's work together
          </h2>

          <p className="text-[15px] text-[#9AA4B2] max-w-xl mb-14 leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always
            open, and I try to reply within a hour or two.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12">
          {/* Left: contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.a
              variants={itemVariants as any}
              href="mailto:mdmahfujulhoque123@gmail.com"
              className="flex items-start gap-4 group"
            >
              <span className="shrink-0 w-10 h-10 rounded-md border border-[#1E2530] bg-[#0D1320] flex items-center justify-center">
                <FiMail size={17} className="text-[#E3B341]" />
              </span>

              <div>
                <p className="text-[13px] text-[#7C879A]">Email</p>
                <p className="text-[14.5px] text-[#E6EDF3] group-hover:text-[#E3B341] transition-colors duration-150">
                  mdmahfujulhoque123@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants as any}
              href="tel:+8801615867969"
              className="flex items-start gap-4 group"
            >
              <span className="shrink-0 w-10 h-10 rounded-md border border-[#1E2530] bg-[#0D1320] flex items-center justify-center">
                <FiPhone size={17} className="text-[#E3B341]" />
              </span>

              <div>
                <p className="text-[13px] text-[#7C879A]">Phone</p>
                <p className="text-[14.5px] text-[#E6EDF3] group-hover:text-[#E3B341] transition-colors duration-150">
                  +880 161 586 7969
                </p>
              </div>
            </motion.a>

            <motion.div
              variants={itemVariants as any}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 w-10 h-10 rounded-md border border-[#1E2530] bg-[#0D1320] flex items-center justify-center">
                <FiMapPin size={17} className="text-[#E3B341]" />
              </span>

              <div>
                <p className="text-[13px] text-[#7C879A]">Location</p>
                <p className="text-[14.5px] text-[#E6EDF3]">
                  Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants as any}
              className="flex items-center gap-4 pt-4"
            >
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/mahfujulhoque12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                <FiGithub size={19} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/md-mahfujul-hoque-0a0875254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                <FiLinkedin size={19} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.facebook.com/mahfujulhoque.badon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                <FiFacebook size={19} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-lg border border-[#1E2530] bg-[#0D1320] p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] text-[#9AA4B2] mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full bg-[#0B0F17] border rounded-md px-3.5 py-2.5 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none transition-colors duration-150 ${
                    errors.name
                      ? "border-red-500/60"
                      : "border-[#1E2530] focus:border-[#E3B341]"
                  }`}
                />

                {errors.name && (
                  <p className="text-[12px] text-red-400 mt-1.5">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[13px] text-[#9AA4B2] mb-2"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+880 1XXXXXXXXX"
                  {...register("phone")}
                  className="w-full bg-[#0B0F17] border border-[#1E2530] rounded-md px-3.5 py-2.5 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none focus:border-[#E3B341] transition-colors duration-150"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[13px] text-[#9AA4B2] mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full bg-[#0B0F17] border rounded-md px-3.5 py-2.5 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none transition-colors duration-150 ${
                  errors.email
                    ? "border-red-500/60"
                    : "border-[#1E2530] focus:border-[#E3B341]"
                }`}
              />

              {errors.email && (
                <p className="text-[12px] text-red-400 mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[13px] text-[#9AA4B2] mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me a bit about your project..."
                {...register("message", { required: "Message is required" })}
                className={`w-full bg-[#0B0F17] border rounded-md px-3.5 py-2.5 text-[14px] text-[#E6EDF3] placeholder:text-[#5B6472] focus:outline-none transition-colors duration-150 resize-none ${
                  errors.message
                    ? "border-red-500/60"
                    : "border-[#1E2530] focus:border-[#E3B341]"
                }`}
              />

              {errors.message && (
                <p className="text-[12px] text-red-400 mt-1.5">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex cursor-pointer items-center gap-2 px-5 py-3 rounded-md bg-[#E3B341] text-[#0B0F17] text-[14.5px] font-medium hover:bg-[#f0c257] transition-colors duration-150 disabled:opacity-60"
            >
              <FiSend size={15} />

              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message sent"
                  : "Send message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
