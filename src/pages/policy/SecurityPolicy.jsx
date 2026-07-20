import React from "react";
import PolicyLayout from "./PolicyLayout";

const sections = [
  {
    id: "our-approach",
    number: "01",
    title: "Our Approach to Security",
    blocks: [
      {
        type: "p",
        text: "Security is foundational to every engagement Tec Tha Technologies Pvt. Ltd. delivers, from AI and cloud platforms to enterprise software and digital infrastructure. We apply a defense-in-depth approach, combining organizational governance, secure engineering practices, and continuous monitoring to protect our own systems and the environments we help our clients build and operate.",
      },
    ],
  },
  {
    id: "organizational-security",
    number: "02",
    title: "Organizational Security",
    blocks: [
      {
        type: "list",
        items: [
          "A dedicated security function responsible for policy, risk management, and governance across the organization.",
          "Mandatory security and data protection awareness training for personnel.",
          "Background verification for employees and contractors, consistent with local law.",
          "Confidentiality obligations embedded in employment and contractor agreements.",
        ],
      },
    ],
  },
  {
    id: "infrastructure-application-security",
    number: "03",
    title: "Infrastructure & Application Security",
    blocks: [
      {
        type: "p",
        text: "We design and operate infrastructure using secure-by-default configurations, network segmentation, and least-privilege principles. Our engineering teams follow secure software development lifecycle practices, including code review, static and dynamic security testing, and dependency monitoring, to reduce the risk of vulnerabilities being introduced into production systems.",
      },
    ],
  },
  {
    id: "data-encryption",
    number: "04",
    title: "Data Encryption",
    blocks: [
      {
        type: "p",
        text: "Where applicable, data is encrypted in transit using industry-standard protocols such as TLS, and at rest using strong encryption standards. Encryption key management follows documented internal procedures designed to limit access to authorized systems and personnel only.",
      },
    ],
  },
  {
    id: "access-control",
    number: "05",
    title: "Access Control",
    blocks: [
      {
        type: "p",
        text: "Access to systems and data is governed by the principle of least privilege, role-based access controls, and multi-factor authentication for sensitive systems. Access rights are reviewed periodically, and access is promptly revoked upon role change or termination of employment or engagement.",
      },
    ],
  },
  {
    id: "vulnerability-management",
    number: "06",
    title: "Vulnerability Management",
    blocks: [
      {
        type: "p",
        text: "We maintain a structured vulnerability management program that includes regular vulnerability scanning, periodic penetration testing by qualified internal or third-party specialists, and a risk-based approach to prioritizing and remediating identified issues within defined timeframes.",
      },
    ],
  },
  {
    id: "incident-response",
    number: "07",
    title: "Incident Response",
    blocks: [
      {
        type: "p",
        text: "Tec Tha maintains a documented incident response process designed to detect, contain, investigate, and remediate security incidents in a timely manner. Where an incident affects client data or systems, we notify affected clients in accordance with contractual and applicable legal obligations.",
      },
    ],
  },
  {
    id: "business-continuity",
    number: "08",
    title: "Business Continuity",
    blocks: [
      {
        type: "p",
        text: "We maintain business continuity and disaster recovery plans covering critical systems and services, including regular data backups, redundancy for key infrastructure, and periodic testing of recovery procedures to reduce the impact of disruptive events.",
      },
    ],
  },
  {
    id: "compliance-certifications",
    number: "09",
    title: "Compliance & Certifications",
    blocks: [
      {
        type: "p",
        text: "We align our security practices with recognized industry frameworks and continue to evaluate certification against standards such as ISO/IEC 27001 and SOC 2 as part of our ongoing security maturity roadmap. Specific compliance commitments applicable to an engagement are documented in the relevant client agreement.",
      },
    ],
  },
  {
    id: "responsible-disclosure",
    number: "10",
    title: "Responsible Disclosure",
    blocks: [
      {
        type: "p",
        text: "We welcome reports from security researchers who identify potential vulnerabilities in our systems. If you believe you have discovered a security issue, please report it responsibly and avoid accessing, modifying, or exfiltrating data beyond what is necessary to demonstrate the issue. We will acknowledge valid reports and work to remediate confirmed vulnerabilities in a reasonable timeframe.",
      },
    ],
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "To report a security concern or vulnerability, please contact our security team at security@tectha.com.",
      },
    ],
  },
];

export default function SecurityPolicy() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Security Policy"
      intro="An overview of the organizational, technical, and operational measures Tec Tha applies to protect systems and data."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
