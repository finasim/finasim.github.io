import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { certifications, scrumCertification } from "@/data/certifications";
import { agentblazerBadges } from "@/data/agentblazer";

interface BadgeCardProps {
  name: string;
  subtitle: string;
  badgeImage?: string;
  note?: string;
  /** 0-100. When set, blurs the badge and overlays a circular "in progress" ring. */
  progress?: number;
  delay: number;
}

// Blur (px) applied to an in-progress badge at 0%, linearly interpolating to
// 0px at 100%. Edit this to make the reveal more or less dramatic.
const MAX_BLUR_PX = 4;

function BadgeCard({ name, subtitle, badgeImage, note, progress, delay }: BadgeCardProps) {
  const inProgress = progress !== undefined;
  const blurPx = inProgress ? MAX_BLUR_PX * (1 - progress / 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay }}
      className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-surface-card"
    >
      {badgeImage ? (
        <div className="relative h-24 w-24">
          <img
            src={badgeImage}
            alt={`${name} badge`}
            className="h-24 w-24 object-contain"
            style={inProgress ? { filter: `blur(${blurPx}px)` } : undefined}
          />
          {inProgress && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              role="img"
              aria-label={`${name} in progress, ${progress}% complete`}
            >
              <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  strokeWidth="3"
                  pathLength="100"
                  className="stroke-slate-300 dark:stroke-slate-700"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="100"
                  strokeDasharray={`${progress} 100`}
                  className="stroke-primary"
                />
              </svg>
              <span className="absolute text-xs font-semibold text-slate-900 dark:text-white">
                {progress}%
              </span>
            </div>
          )}
        </div>
      ) : (
        <BadgeCheck className="text-primary" size={40} />
      )}
      {note && <p className="text-xs italic text-slate-400 dark:text-slate-500">{note}</p>}
      <div>
        <p className="text-sm font-medium text-slate-900 dark:text-white">{name}</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Salesforce Certificates"
      description="Certified across architecture, development, administration, AI, and marketing automation."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <BadgeCard
            key={cert.name}
            name={cert.name}
            subtitle={cert.issuer}
            badgeImage={cert.badgeImage}
            progress={cert.progress}
            delay={i * 0.04}
          />
        ))}
      </div>

      {agentblazerBadges.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-slate-900 dark:text-white">
            Agentblazer Status
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agentblazerBadges.map((badge, i) => (
              <BadgeCard
                key={badge.name}
                name={badge.name}
                subtitle={badge.description}
                badgeImage={badge.badgeImage}
                progress={badge.progress}
                delay={certifications.length * 0.04 + i * 0.04}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <h3 className="mb-6 font-heading text-lg font-semibold text-slate-900 dark:text-white">
          SCRUM Certificate
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <BadgeCard
            name={scrumCertification.name}
            subtitle={scrumCertification.issuer}
            badgeImage={scrumCertification.badgeImage}
            note={scrumCertification.note}
            progress={scrumCertification.progress}
            delay={(certifications.length + agentblazerBadges.length) * 0.04}
          />
        </div>
      </div>
    </Section>
  );
}
