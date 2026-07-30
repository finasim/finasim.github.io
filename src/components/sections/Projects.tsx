import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Case studies"
      description="Representative work spanning integrations, automation, and AI-powered Salesforce solutions."
      className="bg-slate-50 dark:bg-surface"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-surface-card"
          >
            {project.featured && (
              <span className="mb-3 w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Featured
              </span>
            )}

            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-primary">{project.summary}</p>

            <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">Problem: </span>
                {project.problem}
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">Solution: </span>
                {project.solution}
              </p>
            </div>

            <ul className="mt-5 space-y-2">
              {project.impact.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
