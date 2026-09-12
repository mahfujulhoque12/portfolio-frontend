import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: BsGithub, href: "https://github.com/mahfujulhoque12" },
  {
    icon: LiaLinkedin,
    href: "https://www.linkedin.com/in/md-mahfujul-hoque-0a0875254/",
  },
  { icon: FaFacebook, href: "https://www.facebook.com/mahfujulhoque.badon" },
];

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0B0F17] border-t border-[#1E2530]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Left: logo + tagline */}
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <Terminal
                size={20}
                className="text-[#E3B341] group-hover:rotate-6 transition-transform duration-200"
              />
              <span className="font-mono text-[16px] tracking-tight text-[#E6EDF3]">
                mahfuj<span className="text-[#E3B341]">.dev</span>
              </span>
            </a>
            <p className="text-[13.5px] text-[#7C879A] mt-3 leading-relaxed">
              Full stack developer building fast, reliable web products from the
              database up to the interface.
            </p>
          </div>

          {/* Middle: quick links */}
          <div>
            <p className="text-[13px] font-medium text-[#E6EDF3] mb-4">
              Quick links
            </p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: socials */}
          <div>
            <p className="text-[13px] font-medium text-[#E6EDF3] mb-4">
              Find me on
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-[#1E2530]">
          <p className="font-mono text-[12.5px] text-[#5B6472]">
            © {year} Md Mahfujul Hoque. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[12.5px] cursor-pointer text-[#9AA4B2] hover:text-[#E3B341] transition-colors duration-150"
          >
            Back to top
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
