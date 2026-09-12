import { useState } from "react";
import { Terminal, Menu, X, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0B0F17] border-b border-[#1E2530] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0 group">
          <Terminal
            size={22}
            className="text-[#E3B341] group-hover:rotate-6 transition-transform duration-200"
          />
          <span className="font-mono text-[17px] tracking-tight text-[#E6EDF3]">
            mahfuj<span className="text-[#E3B341]">.dev</span>
          </span>
        </a>

        {/* Middle: Nav items (desktop) */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[14.5px] text-[#9AA4B2] hover:text-[#E6EDF3] transition-colors duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Contact */}
        <div className="hidden md:block shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#E3B341] text-[#E3B341] text-[14px] font-medium hover:bg-[#E3B341] hover:text-[#0B0F17] transition-colors duration-150"
          >
            <Mail size={15} />
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#E6EDF3]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1E2530] bg-[#0B0F17] px-6 py-5 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-[#9AA4B2] hover:text-[#E6EDF3] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[#E3B341] text-[#E3B341] text-[14px] font-medium w-fit"
          >
            <Mail size={15} />
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
