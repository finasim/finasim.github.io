import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Salesforce credentials"
      description="Certified across architecture, development, administration, AI, and marketing automation."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-surface-card"
          >
            <BadgeCheck className="mt-0.5 flex-shrink-0 text-primary" size={20} />
            <div>
              <p className="font-medium text-slate-900 dark:text-white">{cert.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
