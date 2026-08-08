import { motion } from "framer-motion";
import { Award, Briefcase, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";

const salesforceCertCount = certifications.filter((c) => c.issuer === "Salesforce").length;

const facts = [
  { icon: Briefcase, label: "Years of experience", value: `${profile.yearsExperience}+` },
  { icon: Award, label: "Salesforce certifications", value: `${salesforceCertCount}` },
  { icon: MapPin, label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Building reliable Salesforce platforms">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
        >
          {profile.summary}
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-surface-card"
            >
              <fact.icon className="mb-3 text-primary" size={22} />
              <p className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                {fact.value}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
        Currently: {experience[0].role} at {experience[0].company}
      </p>
    </Section>
  );
}
