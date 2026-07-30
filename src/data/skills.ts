import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Development",
    items: [
      "Apex",
      "Lightning Web Components",
      "Aura",
      "Visualforce",
      "SOQL",
      "SOSL",
      "Batch Apex",
      "Queueable Apex",
      "Scheduled Apex",
      "Trigger Framework",
      "Platform Events",
    ],
  },
  {
    category: "Administration",
    items: [
      "Flow Builder",
      "Approval Processes",
      "Validation Rules",
      "Permission Sets",
      "Profiles",
      "Sharing Rules",
      "Roles",
      "Reports & Dashboards",
      "Custom Objects",
      "Dynamic Forms",
    ],
  },
  {
    category: "Integration",
    items: [
      "REST API",
      "SOAP API",
      "Named Credentials",
      "OAuth",
      "External Services",
      "Webhooks",
      "Postman",
    ],
  },
  {
    category: "AI & Agentforce",
    items: ["Agentforce", "Agent Builder", "Prompt Builder", "Agentforce Grid"],
  },
  {
    category: "Languages & Tools",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "Git", "Salesforce DX", "VS Code", "IntelliJ IDEA", "Jira", "Copado"],
  },
  {
    category: "Data",
    items: ["MySQL", "Workbench"],
  },
];
