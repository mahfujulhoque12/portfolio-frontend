import React, { useState, useEffect } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

interface CodeLine {
  indent: number;
  text: string;
}

import { ArrowRight, Download } from "lucide-react";
import type { IconType } from "react-icons";
import { FaFacebook } from "react-icons/fa";

interface SocialLink {
  icon: IconType;
  href: string;
}
const CODE_LINES: CodeLine[] = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Md Mahfujul Hoque'," },
  { indent: 1, text: "role: 'Full Stack Developer'," },
  {
    indent: 1,
    text: "stack: ['React', 'Next' ,'Node', 'Express','MongoDB', 'PostgreSQL', 'Python'],",
  },
  { indent: 1, text: "loves: 'building things that work'," },
  { indent: 0, text: "};" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: BsGithub, href: "https://github.com/mahfujulhoque12" },
  {
    icon: LiaLinkedin,
    href: "https://www.linkedin.com/in/md-mahfujul-hoque-0a0875254/",
  },
  { icon: FaFacebook, href: "https://www.facebook.com/mahfujulhoque.badon" },
];

export default function Hero(): React.JSX.Element {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < CODE_LINES.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 220);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section id="home" className="relative w-full bg-[#0B0F17] overflow-hidden">
      {/* subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1E2530 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-10  md:py-15 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: content */}
        <div>
          <p className="font-mono text-[13.5px] text-[#E3B341] mb-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#E6EDF3] leading-tight tracking-tight">
            Md Mahfujul Hoque.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#9AA4B2] mt-2 leading-tight">
            I build scalable full-stack web applications.
          </h2>
          <p className="text-[15.5px] text-[#9AA4B2] mt-6 max-w-md leading-relaxed">
            I'm a developer specializing in building fast, reliable products end
            to end — from database design to pixel-perfect interfaces. Currently
            focused on React Node.js and Python ecosystems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#E3B341] text-[#0B0F17] text-[14.5px] font-medium hover:bg-[#f0c257] transition-colors duration-150"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#1E2530] text-[#E6EDF3] text-[14.5px] font-medium hover:border-[#E3B341] transition-colors duration-150"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10">
            {SOCIAL_LINKS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: terminal code visual */}
        <div className="relative">
          <div className="rounded-lg border border-[#1E2530] bg-[#0D1320] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E2530]">
              <span className="w-3 h-3 rounded-full bg-[#3A4150]" />
              <span className="w-3 h-3 rounded-full bg-[#3A4150]" />
              <span className="w-3 h-3 rounded-full bg-[#3A4150]" />
              <span className="ml-3 text-[12px] font-mono text-[#5B6472]">
                about-me.ts
              </span>
            </div>
            <div className="px-5 py-6 font-mono text-[13.5px] leading-[1.9] min-h-[210px]">
              {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  style={{ paddingLeft: `${line.indent * 20}px` }}
                  className="text-[#9AA4B2]"
                >
                  <span className="text-[#E3B341]">
                    {line.text.split(":")[0]}
                  </span>
                  {line.text.includes(":") ? ":" : ""}
                  <span className="text-[#B8C4D9]">
                    {line.text.split(":").slice(1).join(":")}
                  </span>
                </div>
              ))}
              {visibleLines < CODE_LINES.length && (
                <span className="inline-block w-2 h-4 bg-[#E3B341] animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
