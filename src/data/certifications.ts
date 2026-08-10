import type { Certification } from "@/types";
import platformIntegrationArchitect from "@/assets/badges/Platform-Integration-Architect.png";
import platformDeveloperII from "@/assets/badges/Platform-Developer-II.png";
import platformDeveloperI from "@/assets/badges/Platform-Developer-I.png";
import platformAdministrator from "@/assets/badges/Platform-Administrator.png";
import agentforceSpecialist from "@/assets/badges/Agentforce-Specialist-.png";
import data360Consultant from "@/assets/badges/Data-360-Consultant.png";
import marketingCloudEngagementSpecialist from "@/assets/badges/Marketing-Cloud-Engagement-Specialist.png";
import scrumTeamMember from "@/assets/badges/SCRUM-Team-member.png";

export const certifications: Certification[] = [
  {
    name: "Salesforce Certified Platform Integration Architect",
    issuer: "Salesforce",
    badgeImage: platformIntegrationArchitect,
  },
  {
    name: "Salesforce Platform Developer II (PDII)",
    issuer: "Salesforce",
    badgeImage: platformDeveloperII,
  },
  {
    name: "Salesforce Platform Developer I (PDI)",
    issuer: "Salesforce",
    badgeImage: platformDeveloperI,
  },
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    badgeImage: platformAdministrator,
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    badgeImage: agentforceSpecialist,
  },
  {
    name: "Salesforce Certified Data 360 Consultant",
    issuer: "Salesforce",
    badgeImage: data360Consultant,
  },
  {
    name: "Salesforce Certified Marketing Cloud Engagement Specialist",
    issuer: "Salesforce",
    badgeImage: marketingCloudEngagementSpecialist,
  },
];

export const scrumCertification: Certification = {
  name: "SCRUM Team Member Accredited Certification",
  issuer: "International Scrum Institute",
  badgeImage: scrumTeamMember,
  note: "This logo is an AI-generated image, not an official issuer graphic.",
};
