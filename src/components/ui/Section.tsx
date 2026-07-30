import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
