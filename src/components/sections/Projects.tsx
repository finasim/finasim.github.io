import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function byFeaturedFirst(a: Project, b: Project) {
  return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
}

const products = projects.filter((p) => p.category === "product").sort(byFeaturedFirst);
const caseStudies = projects.filter((p) => p.category === "case-study").sort(byFeaturedFirst);

function ProjectGrid({ items, startDelay = 0 }: { items: Project[]; startDelay?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {items.map((project, i) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: startDelay + i * 0.06 }}
          className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-surface-card"
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.typeLabels?.map((label) => (
                <span
                  key={label}
                  className="w-fit rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
            {project.featured && (
              <span className="w-fit flex-shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Featured
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
            <span lang={project.titleLang}>{project.title}</span>
            {project.version && (
              <span className="ml-2 align-middle text-xs font-medium text-slate-400 dark:text-slate-500">
                v{project.version}
              </span>
            )}
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

          {project.impact.length > 0 && (
            <ul className="mt-5 space-y-2">
              {project.impact.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          )}

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
          {project.liveUrl && (
            <div className="mt-auto flex justify-end pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition hover:bg-accent/20"
              >
                {project.liveLabel ?? "Live"}
                <ExternalLink size={12} />
              </a>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects"
      description="Real shipped products alongside representative Salesforce case studies."
      className="bg-slate-50 dark:bg-surface"
    >
      <div className="space-y-6">
        <ProjectGrid items={products} />
        <ProjectGrid items={caseStudies} startDelay={products.length * 0.06} />
      </div>
    </Section>
  );
}
