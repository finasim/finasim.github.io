import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A full-stack Salesforce toolkit"
      description="From declarative automation and security to Apex development, integrations, and Agentforce AI."
      className="bg-slate-50 dark:bg-surface"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-surface-card"
          >
            <h3 className="mb-4 font-heading text-lg font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
