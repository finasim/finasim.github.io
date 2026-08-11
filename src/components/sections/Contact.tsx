import { motion } from "framer-motion";
import { Download, Mail, Mountain, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const cardClassName =
  "flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-primary dark:border-slate-800 dark:bg-surface-card";

const cardVariants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(15, 23, 42, 0)",
  },
  hover: {
    y: -4,
    boxShadow:
      "0 10px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)",
  },
};

const cardTap = { scale: 0.97 };

const iconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

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
        <motion.a
          href={`mailto:${profile.email}`}
          className={cardClassName}
          initial="rest"
          whileHover="hover"
          whileTap={cardTap}
          variants={cardVariants}
        >
          <motion.span variants={iconVariants}>
            <Mail className="text-primary" size={22} />
          </motion.span>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="font-medium text-slate-900 dark:text-white">{profile.email}</p>
          </div>
        </motion.a>

        <motion.a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className={cardClassName}
          initial="rest"
          whileHover="hover"
          whileTap={cardTap}
          variants={cardVariants}
        >
          <motion.span variants={iconVariants}>
            <Phone className="text-primary" size={22} />
          </motion.span>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="font-medium text-slate-900 dark:text-white">{profile.phone}</p>
          </div>
        </motion.a>

        <motion.a
          href={profile.resumeUrl}
          download
          className={cardClassName}
          initial="rest"
          whileHover="hover"
          whileTap={cardTap}
          variants={cardVariants}
        >
          <motion.span variants={iconVariants}>
            <Download className="text-primary" size={22} />
          </motion.span>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Resume</p>
            <p className="font-medium text-slate-900 dark:text-white">Download PDF</p>
          </div>
        </motion.a>

        {linkedin && (
          <motion.a
            href={linkedin.url}
            target="_blank"
            rel="noreferrer"
            className={cardClassName}
            initial="rest"
            whileHover="hover"
            whileTap={cardTap}
            variants={cardVariants}
          >
            <motion.span variants={iconVariants}>
              <FaLinkedin className="text-primary" size={22} />
            </motion.span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
              <p className="font-medium text-slate-900 dark:text-white">Connect with me</p>
            </div>
          </motion.a>
        )}

        {github && (
          <motion.a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className={cardClassName}
            initial="rest"
            whileHover="hover"
            whileTap={cardTap}
            variants={cardVariants}
          >
            <motion.span variants={iconVariants}>
              <FaGithub className="text-primary" size={22} />
            </motion.span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
              <p className="font-medium text-slate-900 dark:text-white">View my code</p>
            </div>
          </motion.a>
        )}

        {trailblazer && (
          <motion.a
            href={trailblazer.url}
            target="_blank"
            rel="noreferrer"
            className={cardClassName}
            initial="rest"
            whileHover="hover"
            whileTap={cardTap}
            variants={cardVariants}
          >
            <motion.span variants={iconVariants}>
              <Mountain className="text-primary" size={22} />
            </motion.span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Trailblazer</p>
              <p className="font-medium text-slate-900 dark:text-white">View my profile</p>
            </div>
          </motion.a>
        )}
      </motion.div>
    </Section>
  );
}
