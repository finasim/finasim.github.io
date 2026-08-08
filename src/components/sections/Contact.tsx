import { motion } from "framer-motion";
import { Download, Mail, Mountain, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export default function Contact() {
  const github = socialLinks.find((s) => s.icon === "github");
  const linkedin = socialLinks.find((s) => s.icon === "linkedin");
  const trailblazer = socialLinks.find((s) => s.icon === "trailblazer");

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something reliable"
      description="Open to Salesforce developer, architect, and Agentforce roles — reach out through any channel below."
      className="bg-slate-50 dark:bg-surface"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
        >
          <Mail className="text-primary" size={22} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="font-medium text-slate-900 dark:text-white">{profile.email}</p>
          </div>
        </a>

        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
        >
          <Phone className="text-primary" size={22} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="font-medium text-slate-900 dark:text-white">{profile.phone}</p>
          </div>
        </a>

        <a
          href={profile.resumeUrl}
          download
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
        >
          <Download className="text-primary" size={22} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Resume</p>
            <p className="font-medium text-slate-900 dark:text-white">Download PDF</p>
          </div>
        </a>

        {linkedin && (
          <a
            href={linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
          >
            <FaLinkedin className="text-primary" size={22} />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
              <p className="font-medium text-slate-900 dark:text-white">Connect with me</p>
            </div>
          </a>
        )}

        {github && (
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
          >
            <FaGithub className="text-primary" size={22} />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
              <p className="font-medium text-slate-900 dark:text-white">View my code</p>
            </div>
          </a>
        )}

        {trailblazer && (
          <a
            href={trailblazer.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-primary dark:border-slate-800 dark:bg-surface-card"
          >
            <Mountain className="text-primary" size={22} />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Trailblazer</p>
              <p className="font-medium text-slate-900 dark:text-white">View my profile</p>
            </div>
          </a>
        )}
      </motion.div>
    </Section>
  );
}
