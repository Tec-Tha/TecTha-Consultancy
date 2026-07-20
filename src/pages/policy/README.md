# Tec Tha Policy Pages

## Files
- `PolicyLayout.jsx` — shared shell: hero, sticky TOC (desktop sidebar / mobile horizontal pills), scroll-spy active highlighting, smooth-scroll section navigation, back-to-top button.
- `PrivacyPolicy.jsx`, `CookiePolicy.jsx`, `Accessibility.jsx`, `Disclaimer.jsx`, `SecurityPolicy.jsx`, `TermsOfUse.jsx` — each imports `PolicyLayout` and supplies its own realistic content as a `sections` array. Edit the `sections` array in any file to change copy without touching layout code.
- `Footer.jsx` — footer matching your screenshot, with each link routed via `react-router-dom`'s `<Link>`.

## Wiring up routes
Add these routes wherever your app defines them (e.g. `App.jsx`):

```jsx
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./policy-pages/PrivacyPolicy";
import CookiePolicy from "./policy-pages/CookiePolicy";
import Accessibility from "./policy-pages/Accessibility";
import Disclaimer from "./policy-pages/Disclaimer";
import SecurityPolicy from "./policy-pages/SecurityPolicy";
import TermsOfUse from "./policy-pages/TermsOfUse";

<Routes>
  {/* ...your existing routes... */}
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/cookie-policy" element={<CookiePolicy />} />
  <Route path="/accessibility" element={<Accessibility />} />
  <Route path="/disclaimer" element={<Disclaimer />} />
  <Route path="/security-policy" element={<SecurityPolicy />} />
  <Route path="/terms-of-use" element={<TermsOfUse />} />
</Routes>
```

The paths above already match the `to=` values used in `Footer.jsx`, so no further changes are needed there — just drop `Footer.jsx` into your layout in place of the current footer.

## Notes
- All copy is original, production-style legal writing — not lorem ipsum — but is a starting template. Have it reviewed by qualified legal counsel before publishing, since it isn't a substitute for legal advice tailored to your entities and jurisdictions.
- Contact addresses used: `privacy@tectha.com`, `security@tectha.com`, `accessibility@tectha.com`, `legal@tectha.com` — update these if your real inboxes differ.
- Governing law is set to India (matching "Pvt. Ltd." in your footer) — update if a different entity/jurisdiction applies.
