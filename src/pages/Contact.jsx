import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, ChevronDown } from "lucide-react";

/**
 * Contact — "Request for Services"
 *
 * Full-bleed split screen: form on the left over a near-black background,
 * a portrait photo on the right fading into that background. Inputs are
 * underline-only (no boxes), labels sit above each field, and the message
 * field carries a live character counter. Standalone page — does not use
 * PageWrapper, since the layout (back link, split image) is bespoke here.
 *
 * Submission is wired to FormSubmit.co (https://formsubmit.co) via its
 * AJAX endpoint — no backend required. Swap FORM_ENDPOINT's email for
 * your own inbox. The first submission to a new FormSubmit address
 * triggers a one-time "confirm this email" step on their end before
 * messages start arriving — that's FormSubmit's activation flow, not a
 * bug here.
 */

const PORTRAIT_IMAGE = "/contact.avif";
const MESSAGE_MAX_LENGTH = 1500;

// Swap the email below for the inbox that should receive submissions.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/contact@tectha.com";

const REGIONS = ["North America", "Europe", "Middle East", "Asia Pacific", "India", "Other"];
const INDUSTRIES = [
  "Banking & Financial Services",
  "Healthcare & Life Sciences",
  "Retail & Consumer",
  "Manufacturing",
  "Technology & Telecom",
  "Public Sector",
  "Other",
];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  region: "",
  industry: "",
  message: "",
  consentContact: false,
  consentMarketing: false,
};

// ---------------------------------------------------------------------------
// Font loader — injects Montserrat once (guarded by id, safe if the Careers
// page or another component on the same site has already added it).
// ---------------------------------------------------------------------------

const useMontserrat = () => {
  useEffect(() => {
    const id = "montserrat-font-link";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ---------------------------------------------------------------------------
// Small field primitives — underline-only text input and select, styled to
// match the reference exactly (no borders/backgrounds except the baseline).
// ---------------------------------------------------------------------------

const TextField = ({ label, required, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium text-white">
      {label}
      {required && <span className="text-[color:var(--color-brand-400,#7C9CFF)]">*</span>}
    </span>
    <input
      {...props}
      required={required}
      className="mt-3 w-full border-0 border-b border-white/25 bg-transparent pb-2 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white"
    />
  </label>
);

const SelectField = ({ label, required, options, ...props }) => (
  <label className="relative block">
    <span className="text-sm font-medium text-white">
      {label}
      {required && <span className="text-[color:var(--color-brand-400,#7C9CFF)]">*</span>}
    </span>
    <select
      {...props}
      required={required}
      defaultValue=""
      className="mt-3 w-full appearance-none border-0 border-b border-white/25 bg-transparent pb-2 pr-8 text-base text-white outline-none transition-colors duration-200 focus:border-white"
    >
      <option value="" disabled className="bg-black text-white/50">
        Select
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="bg-black text-white">
          {option}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute bottom-2.5 right-0 h-4 w-4 text-white/60" />
  </label>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const Contact = ({ onBack }) => {
  useMontserrat();

  const [form, setForm] = useState(INITIAL_FORM);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New service request — ${form.firstName} ${form.lastName} (${form.organization})`,
          _template: "table",
          "First name": form.firstName,
          "Last name": form.lastName,
          Email: form.email,
          Organization: form.organization,
          Region: form.region,
          Industry: form.industry,
          Message: form.message,
          "Marketing opt-in": form.consentMarketing ? "Yes" : "No",
        }),
      });

      if (!response.ok) throw new Error("FormSubmit request failed");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Request for services submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Portrait image, right half, fading into the dark background */}
      <div className="absolute inset-y-0 right-0 hidden w-[100%] md:block">
        <img src={PORTRAIT_IMAGE} alt="" className="h-full w-full object-cover " />
          <div className="absolute inset-0 bg-black/75" />

      </div>

      <div className="relative mx-auto max-w-3xl px-2 py-14 md:px-12 md:py-20">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="mt-14 flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--color-brand-600,#3B5BFF)]/20">
            <Building2 className="h-4.5 w-4.5 text-[color:var(--color-brand-400,#7C9CFF)]" />
          </span>
          <span className="text-xl font-medium uppercase tracking-[0.2em] text-white">
            Request for Services
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70"
        >
          As enterprises embrace AI at scale, we're helping them transform data into intelligence,
          insights into action, and potential into growth. Tell us a bit more about yourself, so we
          can explore what's possible together.
        </motion.p>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.16}
          onSubmit={handleSubmit}
          className="mt-14 space-y-10"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            <TextField
              label="First name"
              required
              type="text"
              value={form.firstName}
              onChange={updateField("firstName")}
            />
            <TextField
              label="Last name"
              required
              type="text"
              value={form.lastName}
              onChange={updateField("lastName")}
            />
            <TextField
              label="Email"
              required
              type="email"
              value={form.email}
              onChange={updateField("email")}
            />
            <TextField
              label="Organization"
              required
              type="text"
              value={form.organization}
              onChange={updateField("organization")}
            />
          </div>

          <SelectField
            label="Region"
            required
            options={REGIONS}
            value={form.region}
            onChange={updateField("region")}
          />

          <SelectField
            label="Industry"
            required
            options={INDUSTRIES}
            value={form.industry}
            onChange={updateField("industry")}
          />

          <label className="block">
            <span className="text-sm font-medium text-white">
              How can we help you?<span className="text-[color:var(--color-brand-400,#7C9CFF)]">*</span>
            </span>
            <textarea
              required
              rows={1}
              maxLength={MESSAGE_MAX_LENGTH}
              value={form.message}
              onChange={updateField("message")}
              className="mt-3 w-full resize-none border-0 border-b border-white/25 bg-transparent pb-2 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-white"
            />
            <span className="mt-2 block text-right text-xs text-white/40">
              ({form.message.length}/{MESSAGE_MAX_LENGTH})
            </span>
          </label>

          <div className="space-y-4">
            <label className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
              <input
                type="checkbox"
                required
                checked={form.consentContact}
                onChange={updateField("consentContact")}
                className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-sm border border-white/40 bg-transparent accent-[color:var(--color-brand-600,#3B5BFF)]"
              />
              I consent to processing of my personal data entered above for Tec Tha to contact me.
              <span className="text-[color:var(--color-brand-400,#7C9CFF)]">*</span>
            </label>

            <label className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
              <input
                type="checkbox"
                checked={form.consentMarketing}
                onChange={updateField("consentMarketing")}
                className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-sm border border-white/40 bg-transparent accent-[color:var(--color-brand-600,#3B5BFF)]"
              />
              I would like to receive details about products, services, and events from Tec Tha.
            </label>

            <p className="text-xs leading-relaxed text-white/40">
              For further details on how your personal data will be processed and how your consent
              can be managed, refer to the{" "}
              <a href="#" className="font-semibold text-white/60 underline underline-offset-2 hover:text-white">
                Tec Tha Privacy Notice
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold text-white/60 underline underline-offset-2 hover:text-white">
                California Notice at Collection
              </a>
              .
            </p>
            <p className="text-xs text-white/40">*Mandatory fields</p>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-white/15 px-10 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            {status === "success" && (
              <span className="text-sm font-medium text-white/70">
                Thanks — we'll be in touch shortly.
              </span>
            )}
            {status === "error" && (
              <span className="text-sm font-medium text-red-400">
                Something went wrong. Please try again.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;