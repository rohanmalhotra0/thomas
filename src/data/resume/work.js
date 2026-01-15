/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company or entry
 * @property {string} position - Position title or description
 * @property {string} url - Company website or link to resource
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - HTML/Markdown summary of the position
 * @property {string[]} highlights - Plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'New Street Research',
    position: 'Incoming Summer 2026 Research Analyst Intern',
    url: 'https://www.newstreetresearch.com/',
    startDate: '2025-08-01',
    summary:
      'Incoming Research Analyst Intern covering Digital Infrastructure / Datacenter sector.',
    highlights: [
      'Coverage focus: U.S. towers and global communications & tech infrastructure.',
    ],
  },
  {
    name: 'New Street Research',
    position: 'Research Analyst & Business Development Intern',
    url: 'https://www.newstreetresearch.com/',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    summary:
      'Supported U.S. tower research (AMT, CCI, SBAC), contributed to models and sector sensitivity analysis, and supported client-facing deliverables.',
    highlights: [
      'Reviewed 10-Qs/earnings and updated financials and operating KPIs; rolled into U.S. tower industry model for sector forecasts and valuation sensitivities.',
      'Built scenario frameworks (churn, escalators, leasing) to frame sector upside/downside.',
      'Built 20+ page Global Comms overview deck adopted by sales; updated Tech Infrastructure deck.',
      'Produced research support materials: company/market snapshots, trackers, comps-style tables.',
      'Executed Salesforce/Pardot outreach; segmented lists, coordinated sends, and tracked engagement.',
    ],
  },
  {
    name: 'SEO Career – IB & Alternative Investments Track',
    position: 'Edge Program Participant',
    url: 'https://www.seo-usa.org/seo-career/',
    startDate: '2025-12-01',
    summary:
      'Selected for SEO Career Edge with structured prep for Summer 2027 roles.',
    highlights: [
      'Completing technical, behavioral, and industry training alongside coursework and leadership roles at UVA.',
    ],
  },
  {
    name: 'Elevate Off-Campus Meal Plan',
    position: 'Business Development Representative',
    url: '',
    startDate: '2025-10-01',
    summary:
      'Prospected and onboarded local restaurants; managed partner pipeline and launch logistics.',
    highlights: [],
  },
  {
    name: 'Student Council, Finance Committee (UVA)',
    position: 'Administrator',
    url: 'https://uvastudentcouncil.com/',
    startDate: '2025-09-01',
    summary:
      'Evaluated funding proposals and hardship grants across a $1M+ annual budget.',
    highlights: [
      'Standardized review criteria and follow-ups to improve consistency and throughput.',
    ],
  },
  {
    name: 'The Incident Comedy Group',
    position: 'Writer, Actor, Editor',
    url: '',
    startDate: '2025-09-01',
    summary:
      'Collaborated on concepts, scripts, and performances; lead editor for post-production workflow.',
    highlights: [],
  },
  {
    name: 'THON - For The Kids (Penn State)',
    position: 'Fundraiser and Volunteer',
    url: 'https://thon.org/',
    startDate: '2025-01-01',
    endDate: '2025-05-31',
    summary:
      'Raised funds for pediatric cancer research and supported THON Weekend operations.',
    highlights: [
      'Raised $6,000+ through donor outreach and peer-to-peer fundraising.',
    ],
  },
];

export default work;
