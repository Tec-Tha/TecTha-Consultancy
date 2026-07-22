import { Link } from "react-router-dom";

/**
 * Footer — closes every page. Logo, legal links, and copyright.
 * Links sit on a single line from md+ (no wrapping), and reflow into a
 * centered, wrapped group on mobile. Deliberately calm — no gradients
 * or motion here, just structure.
 */

const FOOTER_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Accessibility", to: "/accessibility" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Security Policy", to: "/security-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0 items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Tec Tha"
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
            <span className="whitespace-nowrap text-xl font-semibold tracking-wide sm:text-2xl">
              TEC THA
            </span>
          </Link>

          {/* Legal links — single line on md+, wraps centered on mobile */}
          <nav
            className="
              flex flex-wrap items-center justify-center
              gap-x-3 gap-y-2
              text-center
              md:flex-nowrap md:justify-end md:gap-x-0
            "
          >
            {FOOTER_LINKS.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <Link
                  to={item.to}
                  className="
                    whitespace-nowrap text-xs text-gray-400
                    transition-colors duration-300 hover:text-white
                    sm:text-sm
                  "
                >
                  {item.label}
                </Link>

                {index !== FOOTER_LINKS.length - 1 && (
                  <span
                    className="mx-3 hidden h-4 w-px bg-white/20 sm:mx-4 md:mx-5 lg:mx-6 md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Tec Tha Technologies Pvt. Ltd. All
            Rights Reserved.
          </p>

          <a
            href="mailto:support@tectha.com?subject=Support%20Request&body=Hello%20Tec%20Tha%20Team,%0A%0A"
            className="text-xs text-gray-400 transition-colors duration-300 hover:text-white sm:text-sm"
          >
            support@tectha.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;