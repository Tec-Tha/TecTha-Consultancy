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
        text: "This Cookie Policy explains how Tec Tha Technologies Pvt. Ltd. (\"Tec Tha\", \"we\", \"us\") uses cookies and similar tracking technologies on our website. It should be read alongside our Privacy Policy, which explains more generally how we use personal information.",
      },
    ],
  },
  {
    id: "what-are-cookies",
    number: "02",
    title: "What Are Cookies",
    blocks: [
      {
        type: "p",
        text: "Cookies are small text files placed on your device when you visit a website. They allow the site to recognize your device, remember your preferences, and gather information about how the site is used. Similar technologies include pixels, tags, local storage, and software development kits used within our digital properties.",
      },
    ],
  },
  {
    id: "types-of-cookies",
    number: "03",
    title: "Types of Cookies We Use",
    blocks: [
      { type: "sub", text: "Strictly necessary cookies" },
      {
        type: "p",
        text: "These cookies are essential for our website to function properly, such as enabling secure areas, load balancing, and basic navigation. They cannot be disabled through our systems as the site would not operate correctly without them.",
      },
      { type: "sub", text: "Performance and analytics cookies" },
      {
        type: "p",
        text: "These cookies help us understand how visitors interact with our website by collecting anonymized information on pages visited, time spent, and navigation paths, allowing us to improve site performance and content.",
      },
      { type: "sub", text: "Functionality cookies" },
      {
        type: "p",
        text: "These cookies remember choices you make, such as region or language preferences, to provide a more personalized experience on return visits.",
      },
      { type: "sub", text: "Targeting and marketing cookies" },
      {
        type: "p",
        text: "Where used, these cookies help us measure the effectiveness of communications and present information that is more relevant to your interests across our digital properties.",
      },
    ],
  },
  {
    id: "third-party-cookies",
    number: "04",
    title: "Third-Party Cookies",
    blocks: [
      {
        type: "p",
        text: "Certain features on our website, such as analytics platforms, embedded content, and marketing tools, are provided by trusted third parties who may place their own cookies on your device. We do not control these third-party cookies, and we encourage you to review the relevant third party's cookie and privacy policies for further information.",
      },
    ],
  },
  {
    id: "how-we-use-cookies",
    number: "05",
    title: "How We Use Cookies",
    blocks: [
      {
        type: "list",
        items: [
          "To keep our website secure and operating reliably.",
          "To understand aggregate usage patterns and improve site structure and content.",
          "To remember your preferences across visits.",
          "To measure the performance of our communications and campaigns where applicable.",
        ],
      },
    ],
  },
  {
    id: "managing-preferences",
    number: "06",
    title: "Managing Your Cookie Preferences",
    blocks: [
      {
        type: "p",
        text: "Where required by applicable law, we will present a cookie consent banner on your first visit, allowing you to accept or customize non-essential cookie categories. You may change your preferences at any time by adjusting the cookie settings available on our website.",
      },
    ],
  },
  {
    id: "browser-controls",
    number: "07",
    title: "Browser Controls",
    blocks: [
      {
        type: "p",
        text: "Most browsers allow you to manage cookies through their settings, including blocking or deleting cookies. Please note that disabling certain cookies may affect the functionality and performance of our website. Instructions for managing cookies are generally available in the help section of your browser.",
      },
    ],
  },
  {
    id: "changes",
    number: "08",
    title: "Updates to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Cookie Policy periodically to reflect changes in technology, regulation, or our business practices. Any updates will be posted on this page with a revised \"Last Updated\" date.",
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
        text: "If you have questions about our use of cookies, please contact us at privacy@tectha.com.",
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Cookie Policy"
      intro="An overview of the cookies and similar technologies Tec Tha uses to operate, secure, and improve our website."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
