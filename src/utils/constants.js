/**
 * constants.js
 * Site-wide copy, nav structure, and content collections.
 */
export const SITE = {
  name: 'Vantage Point',
  tagline: 'Systems that hold under enterprise weight.',
  legalName: 'Vantage Point Systems, Inc.',
  email: 'hello@vantagepoint.io',
  phone: '+1 (415) 555-0134',
  address: '1 Ferry Building, Suite 300, San Francisco, CA',
}

export const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { label: 'Services', path: '/services' },
      { label: 'Industries', path: '/industries' },
      { label: 'Case studies', path: '/services#work' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', path: '/#insights' },
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
    ],
  },
]

export const SERVICES = [
  {
    code: 'A1',
    title: 'Cloud & Platform Engineering',
    description:
      'Migrations, re-platforming, and infrastructure that scales without you thinking about it again.',
  },
  {
    code: 'A2',
    title: 'Data & Analytics Systems',
    description:
      'Pipelines and warehouses that turn operational noise into decisions your leadership can trust.',
  },
  {
    code: 'A3',
    title: 'Applied AI & Automation',
    description:
      'Production-grade models and agents wired into the workflows your teams already run.',
  },
  {
    code: 'A4',
    title: 'Enterprise Product Design',
    description:
      'Internal tools and customer-facing products designed for the people who use them daily.',
  },
  {
    code: 'A5',
    title: 'Security & Compliance',
    description:
      'Architecture reviews, threat modeling, and audit-ready controls built in from day one.',
  },
  {
    code: 'A6',
    title: 'Systems Integration',
    description:
      'Connecting legacy cores to modern services without the six-month outage everyone fears.',
  },
]

export const INDUSTRIES = [
  { title: 'Financial Services', description: 'Core banking modernization and risk tooling.' },
  { title: 'Healthcare & Life Sciences', description: 'Interoperable records and clinical workflow systems.' },
  { title: 'Logistics & Supply Chain', description: 'Real-time visibility across fleets and warehouses.' },
  { title: 'Manufacturing', description: 'IoT telemetry and predictive maintenance platforms.' },
  { title: 'Retail & Commerce', description: 'Unified inventory, pricing, and fulfillment engines.' },
  { title: 'Public Sector', description: 'Citizen-facing services built for scale and accessibility.' },
]

export const STATS = [
  { value: 240, suffix: '+', label: 'Enterprise systems shipped' },
  { value: 98, suffix: '%', label: 'Client retention, 5-year average' },
  { value: 18, suffix: 'yrs', label: 'Operating history' },
  { value: 4.2, suffix: 'B', prefix: '$', label: 'Transaction volume supported annually' },
]

export const FEATURED_WORK = [
  {
    client: 'Meridian Bank',
    summary: 'Core ledger migration serving 3.2M accounts with zero downtime cutover.',
    tag: 'Financial Services',
  },
  {
    client: 'Northgate Health',
    summary: 'Unified patient record platform across 40 facilities.',
    tag: 'Healthcare',
  },
  {
    client: 'Ferro Logistics',
    summary: 'Real-time fleet telemetry reducing idle time by 31%.',
    tag: 'Logistics',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'They rebuilt the system underneath us while it stayed running. Our engineers still talk about how quietly it happened.',
    name: 'Elena Marsh',
    role: 'CTO, Meridian Bank',
  },
  {
    quote:
      'Vantage Point treated our compliance constraints as a design input, not an obstacle. That changed how the whole project moved.',
    name: 'David Osei',
    role: 'VP Engineering, Northgate Health',
  },
  {
    quote:
      'The clearest technical communicators we have worked with. No translation layer needed between their team and ours.',
    name: 'Priya Raman',
    role: 'COO, Ferro Logistics',
  },
]

export const INSIGHTS = [
  {
    title: 'The hidden cost of "temporary" integrations',
    excerpt: 'Why stopgap connectors outlive their planned lifespan by an average of 4 years.',
    date: 'Jun 2026',
  },
  {
    title: 'Designing for the audit, not around it',
    excerpt: 'Compliance as an architectural constraint produces better systems, not slower ones.',
    date: 'May 2026',
  },
  {
    title: 'What enterprise AI adoption actually looks like',
    excerpt: 'Field notes from twelve production rollouts across four industries.',
    date: 'Apr 2026',
  },
]

export const LOGOS = [
  'Meridian Bank', 'Northgate Health', 'Ferro Logistics', 'Halden Retail',
  'Corsair Manufacturing', 'Public Works Dept.', 'Anchor Insurance', 'Trellis Data',
]
