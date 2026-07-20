import React from "react";
import PolicyLayout from "./PolicyLayout";

const sections = [
  {
    id: "general-information",
    number: "01",
    title: "General Information",
    blocks: [
      {
        type: "p",
        text: "The content published on the Tec Tha Technologies Pvt. Ltd. (\"Tec Tha\") website is provided for general informational purposes only. It is intended to give an overview of our AI, cloud, enterprise software, digital engineering, cybersecurity, data and analytics, and technology consulting capabilities across the markets we serve, and does not constitute a binding offer, proposal, or guarantee of specific outcomes.",
      },
    ],
  },
  {
    id: "no-professional-advice",
    number: "02",
    title: "No Professional Advice",
    blocks: [
      {
        type: "p",
        text: "Nothing on this website constitutes legal, financial, regulatory, security, or other professional advice. Any technical descriptions, case studies, or capability overviews are illustrative and general in nature. Decisions regarding specific technology, security, or business strategies should be made in consultation with qualified professionals and are the responsibility of the organization making them.",
      },
    ],
  },
  {
    id: "accuracy",
    number: "03",
    title: "Accuracy of Information",
    blocks: [
      {
        type: "p",
        text: "While we make reasonable efforts to keep information on this website accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on it for any purpose. Any reliance you place on such information is strictly at your own risk.",
      },
    ],
  },
  {
    id: "external-links",
    number: "04",
    title: "External Links",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites or resources that are not owned or controlled by Tec Tha. We have no control over, and assume no responsibility for, the content, privacy practices, or accuracy of any third-party websites. Inclusion of any link does not imply endorsement by Tec Tha.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: "05",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the fullest extent permitted by applicable law, Tec Tha and its officers, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of, or inability to use, this website or the information contained on it, even if advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "06",
    title: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "All content on this website, including text, graphics, logos, and the Tec Tha name and mark, is the property of Tec Tha or its licensors and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or used without our prior written consent, except as permitted for personal, non-commercial reference.",
      },
    ],
  },
  {
    id: "changes-to-services",
    number: "07",
    title: "Changes to Services",
    blocks: [
      {
        type: "p",
        text: "We reserve the right to modify, suspend, or discontinue any aspect of our website or the services described on it at any time, without prior notice. Descriptions of services on this website are subject to the specific terms of any signed agreement between Tec Tha and a client, which shall take precedence over general website content in the event of any conflict.",
      },
    ],
  },
  {
    id: "governing-law",
    number: "08",
    title: "Governing Law",
    blocks: [
      {
        type: "p",
        text: "This Disclaimer shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles, unless otherwise specified in a governing service agreement applicable to a particular engagement or jurisdiction.",
      },
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Disclaimer, please contact us at legal@tectha.com.",
      },
    ],
  },
];

export default function Disclaimer() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Disclaimer"
      intro="Important information about the limitations, accuracy, and intended use of the content published on the Tec Tha website."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
