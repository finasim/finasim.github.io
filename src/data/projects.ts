import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "enterprise-rest-integration",
    title: "Enterprise REST API Integration Layer",
    summary:
      "Connected Salesforce to third-party enterprise systems with a reusable, secure integration framework.",
    problem:
      "Multiple downstream systems needed real-time data exchange with Salesforce, but ad-hoc point-to-point callouts were hard to maintain and audit.",
    solution:
      "Built a REST API integration layer using Named Credentials, OAuth, and External Services, with Apex service classes standardizing authentication, retries, and error handling across integrations.",
    impact: [
      "Standardized how Salesforce talks to external systems, cutting integration setup time for new endpoints",
      "Improved reliability and observability of callouts with consistent logging and error handling",
      "Made integrations easier to secure, test, and hand off to other developers",
    ],
    stack: ["Apex", "REST API", "Named Credentials", "OAuth", "External Services", "Postman"],
    featured: true,
  },
  {
    slug: "agentforce-ai-automation",
    title: "Agentforce-Powered Service Automation",
    summary:
      "Introduced AI-driven automation using Agentforce to reduce manual triage in day-to-day service workflows.",
    problem:
      "Support and operations teams spent significant time on repetitive, rules-based tasks that were well-suited to AI assistance but needed guardrails and human oversight.",
    solution:
      "Designed and configured Agentforce agents using Agent Builder and Prompt Builder, wiring them into existing Salesforce data models and Flows so AI actions stayed governed and auditable.",
    impact: [
      "Automated routine triage and response steps, freeing up time for higher-value work",
      "Kept AI actions grounded in Salesforce data with clear escalation paths to humans",
      "Gave the business an early, practical entry point into Salesforce's AI platform",
    ],
    stack: ["Agentforce", "Agent Builder", "Prompt Builder", "Flow Builder", "Apex"],
    featured: true,
  },
  {
    slug: "declarative-automation-overhaul",
    title: "Declarative Automation & Access Model Overhaul",
    summary:
      "Rebuilt sprawling legacy automation and sharing rules into a clean, governed declarative model.",
    problem:
      "Years of ad-hoc workflow rules, process builders, and broad sharing settings had made the org slow, inconsistent, and risky to change.",
    solution:
      "Consolidated automation into Flow Builder following a single-trigger-per-object pattern, tightened Profiles, Permission Sets, and Sharing Rules, and documented the new model for the admin team.",
    impact: [
      "Reduced automation conflicts and easier-to-trace business logic",
      "Improved data security posture through least-privilege sharing and permissions",
      "Left the org easier for future admins and developers to extend safely",
    ],
    stack: ["Flow Builder", "Approval Processes", "Permission Sets", "Sharing Rules", "Validation Rules"],
  },
  {
    slug: "sales-service-cloud-configuration",
    title: "Sales & Service Cloud Configuration for Growing Teams",
    summary:
      "Configured Sales Cloud and Service Cloud, plus supporting LWC components, for evolving business processes.",
    problem:
      "Sales and support teams were outgrowing default Salesforce configuration and needed tailored objects, layouts, and components to match real workflows.",
    solution:
      "Built custom Lightning Web Components, configured objects, fields, and dynamic forms, and layered in reports and dashboards so leadership could track pipeline and case health in real time.",
    impact: [
      "Gave sales and support teams purpose-built views instead of generic defaults",
      "Delivered dashboards that made pipeline and case metrics visible to leadership",
      "Built reusable LWC components adopted across multiple pages",
    ],
    stack: ["Lightning Web Components", "Sales Cloud", "Service Cloud", "Reports & Dashboards", "Dynamic Forms"],
  },
];
