import React from "react";
import PolicyLayout from "./PolicyLayout";

const sections = [
  {
    id: "our-commitment",
    number: "01",
    title: "Our Commitment",
    blocks: [
      {
        type: "p",
        text: "Tec Tha Technologies Pvt. Ltd. is committed to ensuring digital accessibility for people of all abilities. We believe that everyone, including enterprise clients, partners, candidates, and members of the public, should be able to access and engage with our website and digital products without barriers. Accessibility is an ongoing effort that we continue to invest in as our platforms evolve.",
      },
    ],
  },
  {
    id: "standards",
    number: "02",
    title: "Standards We Follow",
    blocks: [
      {
        type: "p",
        text: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with a wide range of disabilities, including visual, auditory, physical, cognitive, and neurological conditions.",
      },
    ],
  },
  {
    id: "features",
    number: "03",
    title: "Accessibility Features",
    blocks: [
      {
        type: "p",
        text: "Our website incorporates a number of features intended to support accessible use, including:",
      },
      {
        type: "list",
        items: [
          "Semantic HTML structure to support screen readers and assistive technologies.",
          "Keyboard-navigable menus, forms, and interactive components with visible focus states.",
          "Sufficient color contrast between text and background elements.",
          "Descriptive alternative text for meaningful images and icons.",
          "Responsive layouts that adapt to different screen sizes, zoom levels, and orientations.",
          "Clear, consistent navigation and labeling throughout the site.",
        ],
      },
    ],
  },
  {
    id: "ongoing-efforts",
    number: "04",
    title: "Ongoing Efforts",
    blocks: [
      {
        type: "p",
        text: "Accessibility is an ongoing priority rather than a one-time project. We periodically review our website against accessibility standards, incorporate accessibility considerations into our design and development processes, and work to remediate issues as they are identified.",
      },
    ],
  },
  {
    id: "third-party-content",
    number: "05",
    title: "Third-Party Content",
    blocks: [
      {
        type: "p",
        text: "Our website may include content, tools, or links provided by third parties that are outside of our direct control. While we encourage accessible practices across our digital ecosystem, we cannot guarantee that third-party content fully conforms to the same accessibility standards we apply to our own website.",
      },
    ],
  },
  {
    id: "feedback",
    number: "06",
    title: "Feedback & Assistance",
    blocks: [
      {
        type: "p",
        text: "We welcome feedback on the accessibility of our website. If you encounter any barriers or difficulty accessing content, or if you need information in an alternative format, please let us know so that we can address the issue and improve your experience.",
      },
    ],
  },
  {
    id: "contact",
    number: "07",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "To report an accessibility issue or request assistance, please contact us at accessibility@tectha.com. We aim to respond to accessibility feedback promptly.",
      },
    ],
  },
];

export default function Accessibility() {
  return (
    <PolicyLayout
      eyebrow="Legal"
      title="Accessibility"
      intro="Tec Tha's ongoing commitment to building a website and digital products that are usable by everyone."
      lastUpdated="July 19, 2026"
      sections={sections}
    />
  );
}
