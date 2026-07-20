import React from "react";
import PolicyLayout from "./PolicyLayout";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    blocks: [
      {
        type: "p",
        text: "Tec Tha Technologies Pvt. Ltd. (\"Tec Tha\", \"we\", \"us\", or \"our\") provides AI, cloud, enterprise software, digital engineering, cybersecurity, data and analytics, and technology consulting services to enterprises, governments, and organizations worldwide. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, engage our services, or otherwise interact with us.",
      },
      {
        type: "p",
        text: "By accessing our website or using our services, you acknowledge that you have read and understood this Policy. If you do not agree with the practices described here, we ask that you refrain from using our website or services.",
      },
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We collect information in several ways depending on how you interact with us.",
      },
      { type: "sub", text: "Information you provide directly" },
      {
        type: "list",
        items: [
          "Contact details such as your name, business email address, phone number, and company name when you submit an inquiry or request a consultation.",
          "Information shared during onboarding, project scoping, or contractual engagements with our teams.",
          "Correspondence you send us, including support requests and feedback.",
        ],
      },
      { type: "sub", text: "Information collected automatically" },
      {
        type: "list",
        items: [
          "Device and usage data, including IP address, browser type, operating system, referring URLs, and pages visited.",
          "Cookies and similar tracking technologies, as described in our Cookie Policy.",
          "Approximate location derived from your IP address for regional service personalization.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Information",
    blocks: [
      {
        type: "p",
        text: "We use the information we collect to operate, maintain, and improve our website and services, and to support our business relationships. Specifically, we use your information to:",
      },
      {
        type: "list",
        items: [
          "Respond to inquiries and provide requested information about our services.",
          "Deliver, manage, and support engagements under signed statements of work or master service agreements.",
          "Personalize and improve website content, functionality, and user experience.",
          "Conduct analytics to understand how our website and services are used.",
          "Comply with legal, regulatory, and contractual obligations, and enforce our agreements.",
          "Protect the security and integrity of our systems, clients, and personnel.",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    number: "04",
    title: "Legal Basis for Processing",
    blocks: [
      {
        type: "p",
        text: "Where applicable data protection law requires a legal basis for processing, we rely on one or more of the following: your consent, the necessity of processing to perform a contract with you, our legitimate business interests in operating and improving our services, and compliance with applicable legal obligations. Where processing is based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.",
      },
    ],
  },
  {
    id: "data-sharing",
    number: "05",
    title: "Data Sharing & Disclosure",
    blocks: [
      {
        type: "p",
        text: "We do not sell personal information. We may share information with the following categories of recipients, subject to appropriate confidentiality and data protection obligations:",
      },
      {
        type: "list",
        items: [
          "Affiliates and subsidiaries within the Tec Tha group of companies.",
          "Subcontractors and service providers who support our infrastructure, hosting, analytics, and business operations under contractual confidentiality obligations.",
          "Professional advisors such as auditors, insurers, and legal counsel where necessary for our business.",
          "Regulators, law enforcement, or courts where required by applicable law or to protect our legal rights.",
          "A successor entity in the event of a merger, acquisition, or sale of business assets, subject to equivalent privacy protections.",
        ],
      },
    ],
  },
  {
    id: "international-transfers",
    number: "06",
    title: "International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "As a global organization operating across Germany, the United Kingdom, the United States, the United Arab Emirates, France, Singapore, Australia, and other markets, we may transfer personal information across national borders. Where we transfer information out of a jurisdiction with data protection requirements, we implement appropriate safeguards, such as standard contractual clauses or equivalent mechanisms recognized under applicable law, to ensure your information receives an adequate level of protection.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, including satisfying any legal, accounting, or reporting requirements. Retention periods vary depending on the nature of the information and the context in which it was collected; where information is no longer required, we take reasonable steps to securely delete, anonymize, or aggregate it.",
      },
    ],
  },
  {
    id: "your-rights",
    number: "08",
    title: "Your Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on your jurisdiction, you may have certain rights regarding your personal information, which may include the right to:",
      },
      {
        type: "list",
        items: [
          "Access the personal information we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request deletion of your personal information, subject to legal exceptions.",
          "Object to or restrict certain processing activities.",
          "Request portability of information you have provided to us.",
          "Withdraw consent where processing is based on consent.",
        ],
      },
      {
        type: "p",
        text: "To exercise any of these rights, please contact us using the details provided at the end of this Policy. We will respond to verified requests within the timeframe required by applicable law.",
      },
    ],
  },
  {
    id: "cookies",
    number: "09",
    title: "Cookies & Tracking Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website uses cookies and similar technologies to enable core functionality, remember preferences, and analyze traffic patterns. Full details of the categories of cookies we use, their purposes, and how you can manage your preferences are set out in our Cookie Policy.",
      },
    ],
  },
  {
    id: "data-security",
    number: "10",
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We maintain administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, and destruction. These measures are further described in our Security Policy. While we take security seriously, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "11",
    title: "Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Our website and services are directed at businesses, governments, and professional audiences and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take reasonable steps to delete it.",
      },
    ],
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the revised Policy on this page with an updated \"Last Updated\" date. We encourage you to review this Policy periodically.",
      },
    ],
  },
  {
    id: "contact",
    number: "13",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our privacy team at privacy@tectha.com or through our website's contact page.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Tec Tha collects, uses, and protects personal information across our website, products, and global service engagements."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
