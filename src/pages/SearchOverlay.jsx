import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { SEARCH_DATA, matchesQuery, getPopularSearchItems } from "../data/searchData";

/**
 * SearchOverlay.jsx
 * ---------------------------------------------------------------------------
 * A single-file, self-contained global search experience, styled to match a
 * premium enterprise reference: a bare bold search icon in the nav, and a
 * full-width, top-anchored dark overlay bar with a plain input and a flat,
 * uncategorized list of results (bold-matched titles, small descriptions,
 * arrow affordance — no cards, no icon chips).
 *
 * Stack: React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React
 *        + React Router DOM
 *
 * Search behavior:
 *   - No category filtering. A single free-text query is matched against
 *     title, description, and keywords (case-insensitive substring match).
 *   - Typing is debounced by 200ms before the filter runs, so fast typing
 *     doesn't re-filter on every keystroke.
 *   - Empty query shows a curated "Popular Searches" list instead of the
 *     full index or a "no results" message.
 *
 * Content lives in src/data/searchData.js (SEARCH_DATA) — this component
 * only renders and filters it.
 *
 * Usage:
 *   import SearchOverlay from "./components/SearchOverlay";
 *   <SearchOverlay />
 * ---------------------------------------------------------------------------
 */

const DEBOUNCE_MS = 200;

// -----------------------------------------------------------------------------
// Animation variants
// -----------------------------------------------------------------------------
const overlayVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.18, ease: "easeIn" } },
};

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.04 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.12, ease: "easeIn" } },
};

// Splits a title into [prefix, match, suffix] around the first case-insensitive
// occurrence of the query, so the matched portion can be rendered bold.
function splitOnMatch(text, query) {
  if (!query) return [text, "", ""];
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return [text, "", ""];
  return [text.slice(0, idx), text.slice(idx, idx + query.length), text.slice(idx + query.length)];
}

// Custom hook: returns `value` debounced by `delay` ms.
function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const debouncedQuery = useDebouncedValue(query, DEBOUNCE_MS);

  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const resultRefs = useRef([]);
  const navigate = useNavigate();

  const openOverlay = useCallback(() => setIsOpen(true), []);

  const closeOverlay = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  // Ctrl+K / Cmd+K to open, Esc to close
  useEffect(() => {
    function handleKeyDown(e) {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }
      if (e.key === "Escape" && isOpen) closeOverlay();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOverlay]);

  // Auto-focus input whenever overlay opens
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Click-outside handling (clicking the dimmed area below the bar closes it)
  const handleBackdropMouseDown = useCallback(
    (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        closeOverlay();
      }
    },
    [closeOverlay]
  );

  // Whether the debounced query is empty decides between "Popular Searches"
  // and live filtered results.
  const isQueryEmpty = debouncedQuery.trim().length === 0;

  const results = useMemo(() => {
    if (isQueryEmpty) return getPopularSearchItems();
    return SEARCH_DATA.filter((item) => matchesQuery(item, debouncedQuery));
  }, [debouncedQuery, isQueryEmpty]);

  useEffect(() => {
    setActiveIndex(0);
    resultRefs.current = [];
  }, [debouncedQuery]);

  const handleSelect = useCallback(
    (route) => {
      closeOverlay();
      navigate(route);
    },
    [closeOverlay, navigate]
  );

  const handleInputKeyDown = useCallback(
    (e) => {
      if (results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = (prev + 1) % results.length;
          resultRefs.current[next]?.scrollIntoView({ block: "nearest" });
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = (prev - 1 + results.length) % results.length;
          resultRefs.current[next]?.scrollIntoView({ block: "nearest" });
          return next;
        });
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = results[activeIndex];
        if (item) handleSelect(item.route);
      }
    },
    [results, activeIndex, handleSelect]
  );

  return (
    <>
      {/* --------------------------------------------------------------- */}
      {/* Trigger — bare, bold search icon only                            */}
      {/* --------------------------------------------------------------- */}
      <button
        type="button"
        onClick={openOverlay}
        aria-label="Open search"
        className="inline-flex items-center justify-center rounded-md p-1.5 text-white/85 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <Search className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.75} />
      </button>

      {/* --------------------------------------------------------------- */}
      {/* Fullscreen overlay — full-width top bar, TCS-style               */}
      {/* --------------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="search-overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            onMouseDown={handleBackdropMouseDown}
            className="fixed inset-0 z-[999] bg-black/70"
          >
            <motion.div
              key="search-overlay-panel"
              ref={panelRef}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseDown={(e) => e.stopPropagation()}
              className="w-full border-b border-white/10 bg-[#181b1f] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]"
            >
              <div className="mx-auto flex max-h-[85vh] w-full max-w-6xl flex-col px-6 py-6 sm:px-10 sm:py-8">
                {/* Search input row */}
                <div className="flex items-center gap-4 border-b border-white/15 pb-4">
                  <Search className="h-6 w-6 shrink-0 text-white/60" strokeWidth={2.25} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="What are you looking for?"
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full bg-transparent text-2xl text-white placeholder-white/40 outline-none sm:text-3xl"
                  />
                  <button
                    type="button"
                    onClick={closeOverlay}
                    aria-label="Close search"
                    className="shrink-0 rounded-md p-1.5 text-white/60 transition-colors hover:text-white"
                  >
                    <X className="h-6 w-6" strokeWidth={2.25} />
                  </button>
                </div>

                {/* Section label */}
                <div className="mt-6 mb-1">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/35">
                    {isQueryEmpty ? "Popular Searches" : `Results`}
                  </span>
                </div>

                {/* Results — flat list, bold match, description, arrow icon */}
                <div className="mt-2 flex-1 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="py-10 text-white/40">
                      No results for &ldquo;{query}&rdquo;. Try a different keyword.
                    </p>
                  ) : (
                    <AnimatePresence mode="popLayout">
                      <motion.ul
                        key={isQueryEmpty ? "popular" : debouncedQuery}
                        variants={listContainerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {results.map((item, idx) => {
                          const [before, match, after] = splitOnMatch(item.title, debouncedQuery);
                          const isActive = idx === activeIndex;
                          return (
                            <motion.li
                              key={item.route}
                              variants={rowVariants}
                              exit="exit"
                              ref={(el) => (resultRefs.current[idx] = el)}
                              className="border-b border-white/[0.06] last:border-b-0"
                            >
                              <Link
                                to={item.route}
                                onClick={closeOverlay}
                                onMouseEnter={() => setActiveIndex(idx)}
                                className={`group flex w-full items-center justify-between gap-6 px-2 py-5 text-left transition-colors duration-150 ${
                                  isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"
                                }`}
                              >
                                <span className="min-w-0">
                                  <span
                                    className={`block text-lg leading-snug sm:text-xl ${
                                      isActive ? "text-white" : "text-white/85 group-hover:text-white"
                                    }`}
                                  >
                                    {match ? (
                                      <>
                                        {before}
                                        <span className="font-bold">{match}</span>
                                        {after}
                                      </>
                                    ) : (
                                      item.title
                                    )}
                                  </span>
                                  <span className="mt-1 block truncate text-sm text-white/40">
                                    {item.description}
                                  </span>
                                </span>
                                <ArrowUpRight
                                  className={`h-5 w-5 shrink-0 transition-all duration-150 ${
                                    isActive
                                      ? "translate-x-0 translate-y-0 text-white opacity-100"
                                      : "-translate-x-0.5 translate-y-0.5 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white/70 group-hover:opacity-100"
                                  }`}
                                  strokeWidth={2}
                                />
                              </Link>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}