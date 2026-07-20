import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../shared/ThemeToggle";
import logo from "/logo.jpeg";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

/**
 * Navbar — sticky, scroll-aware.
 * Transparent over the hero, frosted glass once the page scrolls past a
 * threshold. Desktop active link gets a shared-layout underline that
 * slides between items; mobile collapses into a staggered slide-down
 * drawer.
 *
 * "What we do" opens a TCS-style, hover-driven mega menu: a static intro
 * panel on the left, a vertical list of category tabs in the middle, and
 * a flat two-column item list on the right that swaps with the active
 * tab — everything else in the navbar is unchanged.
 */

const NAV_LINKS = [
  { label: "Who we are", to: "/about" },
  { label: "What we do", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

const SERVICES = [
  {
    title: "Services",
    items: [
      {
        name: "Artificial Intelligence",
        link: "/services/ArtificialIntelligence",
      },
      {
        name: "Enterprise Solutions",
        link: "/services/ERPsolution",
      },
      {
        name: "Cloud & Infrastructure",
        link: "/services/CloudInfrastructure",
      },
      {
        name: "Cybersecurity",
        link: "/services/CyberSecurity",
      },
      {
        name: "Digital Transformation",
        link: "/services/DigitalTransformation",
      },
      
      {
        name:"Managed Services",
        link:"/services/ManagedServices",
      },
      {
        name: "Enterprise Applications",
        link: "/services/EnterpriseApplications",
      },
      {
        name: "Data & Artificial Intelligence",
        link: "/services/DataAI",
      },
    ],
  },

  {
    title: "Industries",
    items: [
      {
        name: "Logistics",
        link: "/industries/logistics",
      },
      {
        name: "Manufacturing",
        link: "/industries/manufacturing",
      },
      {
        name: "Retail",
        link: "/industries/retail",
      },
      {
        name: "Healthcare",
        link: "/industries/healthcare",
      },
      {
        name: "Banking",
        link: "/industries/banking",
      },
      {
        name: "Education",
        link: "/industries/education",
      },
      {
        name: "Government",
        link: "/industries/government",
      },
      {
        name: "Professional Services",
        link: "/industries/professional-services",
      },
    ],
  },
];
const INDUSTRIES = [
  {
    title: "Industries",
    items: [
      {
        name: "Healthcare",
        link: "/industries/healthcare",
      },
      {
        name: "Banking",
        link: "/industries/banking",
      },
      {
        name: "Manufacturing",
        link: "/industries/manufacturing",
      },
      {
        name: "Retail",
        link: "/industries/retail",
      },
      {
        name: "Education",
        link: "/industries/education",
      },
      {
        name: "Government",
        link: "/industries/government",
      },
      {
        name: "Professional Services",
        link: "/industries/professional-services",
      },
      {
        name: "Logistics",
        link: "/industries/logistics",
      },
    ],
  },
];

const drawerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  },
};

const linkStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const linkItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// Mega menu panel: fade + slight rise on open/close.
const megaMenuVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.99,
    transition: { duration: 0.18, ease: [0.7, 0, 0.84, 0] },
  },
};

// Right-panel item list: quick cross-fade when the active category changes.
const itemsPanelVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, x: -8, transition: { duration: 0.12 } },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
const [showIndustries, setShowIndustries] = useState(false);

const [activeCategory, setActiveCategory] = useState(0);
const [activeIndustry] = useState(0);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the mobile drawer / mega menu on route change.
  useEffect(() => {
    setIsMenuOpen(false);
   setShowServices(false);
setShowIndustries(false);
    setActiveCategory(0);
  }, [location.pathname]);

  // Clear any pending close timer on unmount.
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openMegaMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowServices(true);
  };

  const scheduleCloseMegaMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowServices(false);
      setActiveCategory(0);
    }, 120);
  };

  // Keep the menu open while focus is anywhere inside it (keyboard nav);
  // close once focus actually leaves the whole dropdown container.
  const handleContainerBlur = (e) => {
    if (!dropdownRef.current) return;
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setShowServices(false);
      setActiveCategory(0);
    }
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowServices(false);
      setActiveCategory(0);
      e.currentTarget.blur();
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openMegaMenu();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black shadow-lg">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 xl:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TEC THA Logo"
            className="h-14 w-auto object-contain"
          />

          <div className="flex flex-col leading-none">
            <span className="font-['Montserrat'] text-[2rem] font-medium whitespace-nowrap text-white">
              Tec Tha
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.label === "What we do") {
              return (
                <div
                  ref={dropdownRef}
                  key={link.to}
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={scheduleCloseMegaMenu}
                  onBlur={handleContainerBlur}
                >
                  <div className="flex items-center gap-2 px-6 xl:px-7 py-3">
 <Link
  to="/services"
  className={`font-['Montserrat'] text-[1.35rem] transition-colors ${
    location.pathname.startsWith("/services")
      ? "text-white"
      : "text-gray-300 hover:text-white"
  }`}
>
  What we do
</Link>

  <button
    type="button"
    onClick={() => setShowServices((prev) => !prev)}
    className="text-gray-300 hover:text-white"
    aria-haspopup="true"
    aria-expanded={showServices}
  >
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        showServices ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

                  {location.pathname.startsWith("/services") && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full bg-white"
                    />
                  )}

                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        variants={megaMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-x-0 top-20 z-[999] w-full border-t border-white/10 bg-black shadow-2xl"
                      >
                        <div className="mx-auto grid max-w-[1650px] grid-cols-[320px_280px_1fr] gap-x-16 px-10 py-16">
                          {/* Column 1 — static intro panel (doesn't change with the active tab) */}
                          <div className="pr-4">
                            <h3 className="font-['Montserrat'] text-4xl font-light leading-[1.1] text-white">
                              Strategy to
                              <br />
                              Systems
                            </h3>
                            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/50">
                              We turn technology decisions into measurable
                              outcomes — AI, cloud, ERP, security, and growth,
                              delivered as one connected practice.
                            </p>
                            <Link
                              to="/services"
                    
                              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-white"
                            >
                              Explore all services
                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                          </div>

                          {/* Column 2 — vertical category tabs */}
                          <div
                            role="tablist"
                            aria-label="Service categories"
                            className="divide-y divide-white/10 border-l border-white/10 pl-10"
                          >
                            {SERVICES.map((section, i) => {
  const isActive = activeCategory === i;

  return (
    <div key={section.title}>
      {section.title === "Services" || section.title === "Industries" ? (
        <Link
  to={section.title === "Services" ? "/services" : "/industries"}
          onMouseEnter={() => setActiveCategory(i)}
          onFocus={() => setActiveCategory(i)}
          onClick={() => setShowServices(false)}
          className={`group flex w-full items-center justify-between gap-3 py-3.5 text-left font-['Montserrat'] text-[15px] transition-colors duration-200 ${
            isActive
              ? "font-semibold text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>{section.title}</span>
          <ChevronRight size={15} />
        </Link>
      ) : (
        <button
          type="button"
          role="tab"
          aria-selected={isActive}
          onMouseEnter={() => setActiveCategory(i)}
          onFocus={() => setActiveCategory(i)}
          className={`group flex w-full items-center justify-between gap-3 py-3.5 text-left font-['Montserrat'] text-[15px] transition-colors duration-200 ${
            isActive
              ? "font-semibold text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>{section.title}</span>
          <ChevronRight size={15} />
        </button>
      )}
    </div>
  );
})}
                          </div>

                          {/* Columns 3 & 4 — flat item list for the active category */}
                          <div className="relative min-h-[360px] border-l border-white/10 pl-16">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={SERVICES[activeCategory].title}
                                variants={itemsPanelVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="columns-2 gap-x-16"
                              >
                                {SERVICES[activeCategory].items.map((item) => (
  <Link
    key={item.name}
    to={item.link}
    onClick={() => setShowServices(false)}
    className="mb-5 block break-inside-avoid text-[15px] text-gray-300 transition-colors duration-200 hover:text-white"
  >
    {item.name}
  </Link>
))}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
  `relative px-6 py-3 font-['Montserrat'] text-[1.35rem] transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-underline"
                        className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full bg-white"
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-black shadow-[0_0_24px_-8px_rgba(99,102,241,0.6)] transition-shadow duration-300 hover:shadow-[0_0_32px_-6px_rgba(99,102,241,0.75)]"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-gray-800 bg-black md:hidden"
          >
            <motion.nav
              variants={linkStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-6 py-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.to} variants={linkItem}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-lg font-medium ${
                        isActive
                          ? "bg-blue-600/15 text-blue-400"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={linkItem} className="mt-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3.5 text-base font-semibold text-white"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;