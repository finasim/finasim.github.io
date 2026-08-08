import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sf-dependency-checker",
    title: "SF Dependency Checker",
    category: "product",
    typeLabels: ["Salesforce", "Managed Package", "2GP"],
    version: "1.5",
    summary:
      "Finds every place a field, object, or metadata component is used across your org — before you deprecate or delete it.",
    problem:
      "No fast way to see where a field, object, or metadata component is used.",
    solution:
      "A managed package that scans org metadata and surfaces every dependency for a component in one Lightning Web Component view.",
    impact: [
      "Reduced risk of breaking changes by identifying all dependencies before deletion or modification",
      "Saved time for admins and developers by providing a single view of dependencies instead of searching through multiple tools",
      "Improved org health by making it easier to clean up unused fields and components",
    ],
    stack: ["Apex", "LWC", "Rest API", "Named Credentials", "OAuth", "External Client App", "Custom Objects", "Custom Metadata Types"],
    featured: true,
    liveLabel: "Install Package",
    liveUrl:
      "https://login.salesforce.com/packaging/installPackage.apexp?p0=04tg5000000CYYzAAO",
  },
  {
    slug: "lcm-gcd-calculator",
    title: "ল.সা.গু - গ.সা.গু Calculator",
    category: "product",
    typeLabels: ["Android", "App"],
    summary: "A simple, fast calculator app for LCM, GCD, and base conversion.",
    problem:
      "Students and everyday users needed a quick, no-friction way to calculate LCM, GCD, and number base conversions on the go.",
    solution:
      "Built a lightweight Flutter app focused on speed and simplicity for these everyday math calculations.",
    impact: [
      "Improved accessibility to quick math calculations for students and everyday users",
      "Provided a user-friendly interface that reduces friction in performing calculations",
      "Enhanced learning and understanding of LCM, GCD, Base Conversion concepts through practical application",
      "Increased engagement with math concepts by providing a convenient tool for practice and learning",
    ],
    stack: ["Flutter", "Dart", "Android", "iOS", "Google Play Store", "App Store", "Git", "GitHub"],
    featured: true,
    liveLabel: "Play Store",
    liveUrl: "https://play.google.com/store/apps/details?id=com.apps.finstudio.lcmgcdcalculator",
  },
  {
    slug: "enterprise-rest-integration",
    title: "Enterprise REST API Integration Layer",
    category: "case-study",
    typeLabels: ["Salesforce", "Case Study"],
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
    category: "case-study",
    typeLabels: ["Salesforce", "Case Study"],
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
    category: "case-study",
    typeLabels: ["Salesforce", "Case Study"],
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
    category: "case-study",
    typeLabels: ["Salesforce", "Case Study"],
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
