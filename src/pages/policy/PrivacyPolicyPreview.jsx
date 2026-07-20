import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

/**
 * PolicyLayout
 * Reusable premium documentation shell for Tec Tha legal / policy pages.
 *
 * Props:
 *  - eyebrow: string            e.g. "Legal"
 *  - title: string              e.g. "Privacy Policy"
 *  - intro: string              short hero description
 *  - lastUpdated: string        e.g. "July 19, 2026"
 *  - sections: [{
 *      id: string,
 *      number: string,          e.g. "01"
 *      title: string,
 *      blocks: [
 *        { type: "p", text: string } |
 *        { type: "sub", text: string } |
 *        { type: "list", items: string[] }
 *      ]
 *    }]
 */
function PolicyLayout({ eyebrow = "Legal", title, intro, lastUpdated, sections }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? "");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef({});
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 1] }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const el = mobileNavRef.current?.querySelector(`[data-id="${activeId}"]`);
    if (el && mobileNavRef.current) {
      const nav = mobileNavRef.current;
      const offset = el.offsetLeft - nav.clientWidth / 2 + el.clientWidth / 2;
      nav.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [activeId]);

  const scrollToSection = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen w-full bg-[#040404] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        .toc-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(255,255,255,0.09), transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/45">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-3xl text-[11vw] font-extrabold leading-[0.98] tracking-tight sm:text-[6vw] lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/55 sm:text-base">
            {intro}
          </p>
          {lastUpdated && (
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Last Updated — {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Mobile TOC — horizontal sticky */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#040404]/95 backdrop-blur-md lg:hidden">
        <div ref={mobileNavRef} className="toc-scroll flex gap-2 overflow-x-auto px-4 py-3" style={{ scrollbarWidth: "none" }}>
          {sections.map((s) => (
            <button
              key={s.id}
              data-id={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                activeId === s.id
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/[0.03] text-white/60"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-16 lg:px-16">
        {/* Desktop sticky TOC */}
        <aside className="hidden lg:block">
          <nav aria-label="Table of contents" className="sticky top-28 flex flex-col gap-1 border-l border-white/10 pl-6">
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
              On This Page
            </span>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`group relative py-1.5 text-left text-[13px] leading-snug transition-colors duration-300 ${
                  activeId === s.id ? "text-white" : "text-white/45 hover:text-white/75"
                }`}
              >
                <span
                  className={`absolute -left-6 top-2 h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    activeId === s.id ? "bg-white" : "bg-white/0"
                  }`}
                />
                <span className="font-mono text-[11px] text-white/30">{s.number}</span>{" "}
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Sections */}
        <div className="min-w-0">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              ref={(el) => (sectionRefs.current[s.id] = el)}
              style={{ scrollMarginTop: "96px" }}
              className={i !== 0 ? "mt-14 border-t border-white/10 pt-14 sm:mt-16 sm:pt-16" : ""}
            >
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-mono text-sm text-white/30">{s.number}</span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-[1.75rem]">{s.title}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {s.blocks.map((b, idx) => {
                  if (b.type === "sub") {
                    return (
                      <h3 key={idx} className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                        {b.text}
                      </h3>
                    );
                  }
                  if (b.type === "list") {
                    return (
                      <ul key={idx} className="flex flex-col gap-2.5 pl-1">
                        {b.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-sm font-light leading-relaxed text-white/60 sm:text-[15px]">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm font-light leading-relaxed text-white/60 sm:text-[15px]">
                      {b.text}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <button
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-7 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/70 backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-black sm:bottom-9 sm:right-9 ${
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={16} strokeWidth={1.75} />
      </button>
    </div>
  );
}


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

function PrivacyPolicy() {
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


export default PrivacyPolicy;
