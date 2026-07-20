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
export default function PolicyLayout({ eyebrow = "Legal", title, intro, lastUpdated, sections }) {
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
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-4 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/45">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-3xl text-[11vw] font-medium leading-[0.98] tracking-tight sm:text-[6vw] lg:text-[3.4rem]">
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
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[260px_1fr] lg:gap-16 lg:px-16">
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
                <span className="font-medium text-[11px] text-white/30">{s.number}</span>{" "}
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
