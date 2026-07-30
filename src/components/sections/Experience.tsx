import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built"
      description="Six years across implementation partners and in-house teams, from certification to architecture."
    >
      <div className="relative border-l border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />

            <p className="text-sm font-medium text-primary">{job.period}</p>
            <h3 className="mt-1 font-heading text-xl font-bold text-slate-900 dark:text-white">
              {job.role}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">{job.company}</p>

            <ul className="mt-4 space-y-2">
              {job.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
