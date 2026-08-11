import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "@/components/common/ThemeToggle";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Probe line sits just below the fixed header; the active section is the
    // last one whose top has crossed it. Ratio-based observers misfire here
    // because sections vary a lot in height.
    const PROBE_Y = 100;

    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = navLinks
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter((el): el is HTMLElement => el !== null);

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (atBottom) {
        setActiveId(sections[sections.length - 1]?.id ?? "");
        return;
      }

      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= PROBE_Y) current = el.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-dark/80"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-lg font-bold text-slate-900 dark:text-white">
          {profile.name.split(" ").map((n) => n[0]).join("")}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "text-sm font-medium transition hover:text-primary dark:hover:text-primary",
                    isActive
                      ? "text-primary"
                      : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <motion.a
            href="#contact"
            initial={{ boxShadow: "0 0 0 0 rgba(37, 99, 235, 0)" }}
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: "0 0 18px 4px rgba(37, 99, 235, 0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Let's talk
          </motion.a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-dark md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={clsx(
                      "block text-sm font-medium",
                      isActive ? "text-primary" : "text-slate-600 dark:text-slate-300"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
