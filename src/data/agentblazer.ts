import type { AgentblazerBadge } from "@/types";
import champion from "@/assets/badges/Agentblazer-Level-1-Champion.png";
import innovator from "@/assets/badges/Agentblazer-Level-2-Innovator.png";
import legend from "@/assets/badges/Agentblazer-Level-3-Legend.png";

// Edit this to update the in-progress percentage shown on the Legend badge.
const LEGEND_PROGRESS = 32;

export const agentblazerBadges: AgentblazerBadge[] = [
  {
    name: "Agentblazer Champion",
    description: "Trailhead recognition for Agentforce skills — Level 1",
    badgeImage: champion,
  },
  {
    name: "Agentblazer Innovator",
    description: "Trailhead recognition for Agentforce skills — Level 2",
    badgeImage: innovator,
  },
  {
    name: "Agentblazer Legend",
    description: "Trailhead recognition for Agentforce skills — Level 3",
    badgeImage: legend,
    progress: LEGEND_PROGRESS,
  },
];
