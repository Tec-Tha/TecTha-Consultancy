import React from "react";
import PolicyLayout from "./PolicyLayout";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    blocks: [
      {
        type: "p",
        text: "These Terms of Use (\"Terms\") govern your access to and use of the Tec Tha Technologies Pvt. Ltd. (\"Tec Tha\", \"we\", \"us\") website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.",
      },
    ],
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility",
    blocks: [
      {
        type: "p",
        text: "Our website is intended for business and professional audiences. By using our website, you represent that you are at least 18 years old and have the authority to agree to these Terms on your own behalf or on behalf of the organization you represent.",
      },
    ],
  },
  {
    id: "use-of-services",
    number: "03",
    title: "Use of Services",
    blocks: [
      {
        type: "p",
        text: "You may use our website to learn about Tec Tha's services, request information, and engage with our teams. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the website by, any third party.",
      },
    ],
  },
  {
    id: "account-responsibilities",
    number: "04",
    title: "Account Responsibilities",
    blocks: [
      {
        type: "p",
        text: "Where any portion of our website or related platforms requires the creation of an account, you are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. You agree to notify us promptly of any unauthorized use of your account.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property Rights",
    blocks: [
      {
        type: "p",
        text: "All content on this website, including text, graphics, logos, icons, software, and the overall design and \"look and feel,\" is owned by Tec Tha or its licensors and is protected by copyright, trademark, and other intellectual property laws. Except as expressly permitted, you may not copy, reproduce, modify, distribute, or create derivative works from any content on this website without our prior written consent.",
      },
    ],
  },
  {
    id: "prohibited-conduct",
    number: "06",
    title: "Prohibited Conduct",
    blocks: [
      {
        type: "p",
        text: "When using our website, you agree not to:",
      },
      {
        type: "list",
        items: [
          "Attempt to gain unauthorized access to our systems, networks, or data.",
          "Introduce viruses, malware, or other harmful code.",
          "Use automated means to scrape, harvest, or extract data without our consent.",
          "Misrepresent your identity or affiliation with any person or organization.",
          "Use the website in any way that could disable, overburden, or impair its functionality.",
        ],
      },
    ],
  },
  {
    id: "third-party-services",
    number: "07",
    title: "Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "Our website may reference or link to third-party tools, platforms, or content. We do not control and are not responsible for the availability, accuracy, or practices of any third-party services, and your use of them is at your own risk and subject to their respective terms.",
      },
    ],
  },
  {
    id: "disclaimers",
    number: "08",
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: "Our website and its content are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: "09",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the fullest extent permitted by applicable law, Tec Tha shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from or related to your use of, or inability to use, our website, even if we have been advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "indemnification",
    number: "10",
    title: "Indemnification",
    blocks: [
      {
        type: "p",
        text: "You agree to indemnify and hold harmless Tec Tha, its affiliates, and their respective officers, employees, and agents from any claims, liabilities, damages, and expenses, including reasonable legal fees, arising out of your use of the website or violation of these Terms.",
      },
    ],
  },
  {
    id: "termination",
    number: "11",
    title: "Termination",
    blocks: [
      {
        type: "p",
        text: "We reserve the right to suspend or restrict your access to our website, without notice, if we reasonably believe you have violated these Terms or engaged in conduct that may harm Tec Tha, other users, or third parties.",
      },
    ],
  },
  {
    id: "governing-law",
    number: "12",
    title: "Governing Law & Disputes",
    blocks: [
      {
        type: "p",
        text: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles, unless otherwise agreed in a specific client agreement. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts, or resolved through arbitration where specified in an applicable agreement.",
      },
    ],
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may revise these Terms from time to time. The updated version will be indicated by a revised \"Last Updated\" date and will be effective as soon as it is accessible. Your continued use of the website following any changes constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Terms of Use, please contact us at legal@tectha.com.",
      },
    ],
  },
];

export default function TermsOfUse() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Terms of Use"
      intro="The terms governing your access to and use of the Tec Tha website and the information published on it."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
