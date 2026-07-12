import { useMemo } from "react";

/**
 * LogoSlider
 * Infinite "Trusted by" marquee. Pure CSS animation (transform: translateX)
 * so it never drops frames on scroll, unlike JS-driven carousels.
 * Pauses on hover. Edges fade via mask-image so logos dissolve into the section bg.
 *
 * Pass real logos later as { name, Logo } where Logo is an SVG component;
 * for now this renders wordmark placeholders so nothing implies a real brand.
 */
const placeholderClients = [
  "Northbridge",
  "Alderly Group",
  "Vantage Point",
  "Solace Systems",
  "Meridian Labs",
  "Corvus Holdings",
  "Ferrum Dynamics",
  "Halcyon Partners",
];

const LogoSlider = ({ clients = placeholderClients, speed = 32 }) => {
  // Duplicate the list once so the loop can wrap seamlessly at -50%
  const track = useMemo(() => [...clients, ...clients], [clients]);

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className="group flex w-max items-center"
        style={{ "--marquee-duration": `${speed}s` }}
      >
        <ul
          className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]"
          aria-hidden={false}
        >
          {track.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex shrink-0 items-center select-none whitespace-nowrap text-xl font-semibold tracking-tight text-[color:var(--color-text-muted)] opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 32s) linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;