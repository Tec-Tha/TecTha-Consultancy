import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Share2, X, Code } from "lucide-react";
 
/**
 * Footer — closes every page. Four link columns, a lightweight newsletter
 * form, and legal/copyright. Deliberately calm relative to the rest of the
 * site — no gradients or motion here, just structure.
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
  <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

      {/* Logo */}

      <Link to="/" className="flex items-center gap-3">
        <img
          src="/logo.jpeg"
          alt="Tec Tha"
          className="h-12 w-12 object-contain"
        />

        <span className="text-2xl font-semibold tracking-wide">
          TEC THA
        </span>
      </Link>

      {/* Legal */}
<div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6 lg:gap-x-8">

  {FOOTER_LINKS.map((item, index) => (
    <div key={item.label} className="flex items-center">

      <Link
        to={item.to}
        className="
          text-sm
          text-gray-400
          hover:text-white
          transition-colors
          duration-300
        "
      >
        {item.label}
      </Link>

      {index !== FOOTER_LINKS.length - 1 && (
        <span className="mx-4 h-4 w-px bg-white/20 sm:mx-6 lg:mx-8" />
      )}

    </div>
  ))}

</div>
    </div>

   <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
  <p className="text-sm text-gray-500">
    © {new Date().getFullYear()} Tec Tha Technologies Pvt. Ltd. All Rights Reserved.
  </p>

  <a
    href="mailto:support@tectha.com?subject=Support%20Request&body=Hello%20Tec%20Tha%20Team,%0A%0A"
    className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
  >
    support@tectha.com
  </a>
</div>
  </div>
</footer>
  );
};
 
export default Footer;