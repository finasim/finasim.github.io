import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
// import heroImage from "@/assets/hero.png";
import heroImage from "@/assets/profile-image.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent dark:from-primary/20" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            {profile.yearsExperience}+ years building on Salesforce
          </p>

          <h1 className="font-heading text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
          <img
            src={heroImage}
            alt={profile.name}
            className="aspect-square w-full rounded-3xl object-cover shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800"
          />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-primary"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
