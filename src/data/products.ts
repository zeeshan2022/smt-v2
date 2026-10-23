export interface Product {
  slug: string;
  code: string;
  title: string;
  category: 'Intelligence' | 'Experience' | 'Venue' | 'Security';
  tagline: string;
  summary: string;
  features: { name: string; detail: string }[];
  idealFor: string[];
  keywords: string[];
}

export const products: Product[] = [
  {
    slug: 'sovereign-event-intelligence',
    code: 'P-01',
    title: 'Sovereign Event Intelligence',
    category: 'Intelligence',
    tagline: 'Transform events into secure, searchable intelligence.',
    summary:
      'The flagship platform of Secure Media Tech. Sovereign Event Intelligence captures every session at your event — live transcription, AI summarisation with human-in-the-loop approval, analytics, delegate portals and a broadcast engine — while keeping all content inside governed, sovereign infrastructure you control.',
    features: [
      { name: 'Live Transcription', detail: 'Multilingual real-time speech-to-text across stages and session rooms.' },
      { name: 'AI Summary', detail: 'Automatic session digests, decisions and quotes generated for review.' },
      { name: 'HITL Approval', detail: 'Human-in-the-loop editorial gate before anything is published or broadcast.' },
      { name: 'Analytics', detail: 'Attendance, engagement, topic sentiment and session performance dashboards.' },
      { name: 'Knowledge Search', detail: 'Semantic search across transcripts, summaries and uploaded event assets.' },
      { name: 'Delegate Portal', detail: 'Personalised agenda, on-demand sessions and networking for attendees.' },
      { name: 'Broadcast Engine', detail: 'Clips, highlights and multi-channel distribution straight from the platform.' },
    ],
    idealFor: ['Government summits', 'Ministerial forums', 'Enterprise conferences', 'Exhibitions'],
    keywords: ['Event Intelligence Platform UAE', 'Secure Event Technology Dubai'],
  },
  {
    slug: 'meeting-intelligence',
    code: 'P-02',
    title: 'Meeting Intelligence',
    category: 'Intelligence',
    tagline: 'Every meeting captured, every action tracked, nothing lost.',
    summary:
      'An enterprise capture layer for boardrooms and operations centres. Meeting Intelligence records, transcribes and structures internal meetings into searchable knowledge with tracked action items — governed to the same security standards we apply to national events.',
    features: [
      { name: 'Meeting Capture', detail: 'One-touch recording and transcription for hybrid and in-room meetings.' },
      { name: 'Action Tracking', detail: 'AI-extracted owners, deadlines and follow-ups pushed to your tools.' },
      { name: 'Knowledge Retention', detail: 'Decisions and context preserved in a structured institutional memory.' },
      { name: 'Search', detail: 'Find any statement, decision or action across months of meetings instantly.' },
    ],
    idealFor: ['Executive offices', 'PMOs', 'Legal & compliance teams', 'Operations leads'],
    keywords: ['AI Meeting Solutions UAE', 'Knowledge Systems Dubai'],
  },
  {
    slug: 'ai-digital-human',
    code: 'P-03',
    title: 'AI Digital Human',
    category: 'Experience',
    tagline: 'Lifelike AI presenters that welcome, answer and convert.',
    summary:
      'Photoreal avatar experiences powered by voice and multilingual LLM dialogue. Deploy AI Digital Humans as exhibition hosts, museum narrators, concierge faces and brand ambassadors — proven in concept through our interactive work at EXPO 2020 Dubai and GITEX pavilions.',
    features: [
      { name: 'Avatar', detail: 'Photoreal or branded digital personas with natural gesture and lip-sync.' },
      { name: 'Voice', detail: 'Neural text-to-speech with low-latency conversational turns.' },
      { name: 'Multi-language', detail: 'Dozens of languages with automatic detection for global audiences.' },
      { name: 'Lead Capture', detail: 'Qualified conversations funnel visitor details into your CRM.' },
      { name: 'AI Interaction', detail: 'Grounded RAG answers from your approved knowledge base — no hallucinated promises.' },
    ],
    idealFor: ['Pavilions & museums', 'Banking & retail lobbies', 'Real estate sales centres', 'Exhibition stands'],
    keywords: ['Digital Human UAE', 'AI Avatar Dubai'],
  },
  {
    slug: 'ai-concierge',
    code: 'P-04',
    title: 'AI Concierge',
    category: 'Experience',
    tagline: 'An always-on guide for venues, hotels and campuses.',
    summary:
      'Screen, kiosk or chat-based guidance trained on your venue. The AI Concierge handles navigation, services, recommendations and FAQs in multiple languages — reducing queue load on front-desk teams while producing demand analytics operators can act on.',
    features: [
      { name: 'Navigation', detail: 'Step-by-step wayfinding to halls, desks, gates and amenities.' },
      { name: 'Assistance', detail: 'Service requests routed to the right team with full context.' },
      { name: 'Recommendations', detail: 'Dining, agenda and experience suggestions tuned to guest profile.' },
      { name: 'FAQ', detail: 'Instant grounded answers from venue policies and knowledge sources.' },
    ],
    idealFor: ['Hotels & hospitality', 'Malls & airports', 'Hospitals & campuses', 'Exhibition centres'],
    keywords: ['AI Concierge UAE', 'Smart Venue Solutions UAE'],
  },
  {
    slug: 'venue-command-center',
    code: 'P-05',
    title: 'Venue Command Center',
    category: 'Venue',
    tagline: 'One screen for everything happening in your venue.',
    summary:
      'The operational heart of a smart venue. Venue Command Center fuses crowd analytics, device health, incident management and KPI dashboards into a single real-time picture — engineered with the same SOC/NOC discipline we run for enterprise security operations.',
    features: [
      { name: 'Crowd Analytics', detail: 'Density, flow and dwell heatmaps from camera and sensor fusion.' },
      { name: 'Device Monitoring', detail: 'Live status of screens, sensors, network and AV endpoints.' },
      { name: 'Incident Management', detail: 'Detect, assign, escalate and close incidents with audit trails.' },
      { name: 'Operations Dashboard', detail: 'KPI wall for show days, footfall, uptime and response times.' },
    ],
    idealFor: ['Arena & stadium operators', 'Exhibition centres', 'Facilities management', 'Event control rooms'],
    keywords: ['Smart Venue Solutions UAE', 'Venue Operations Dubai'],
  },
  {
    slug: 'smart-venue-os',
    code: 'P-06',
    title: 'Smart Venue OS',
    category: 'Venue',
    tagline: 'The operating system layer beneath intelligent venues.',
    summary:
      'Smart Venue OS unifies subsystems — network, AV, access, signage, IoT — under one data model. Occupancy intelligence, analytics and asset tracking become available to every application in the venue without bespoke integrations each time.',
    features: [
      { name: 'Venue Intelligence', detail: 'Cross-system correlation of people, space and equipment data.' },
      { name: 'Occupancy', detail: 'Room-level and zone-level occupancy for planning and energy decisions.' },
      { name: 'Analytics', detail: 'Historical and predictive reporting on utilisation patterns.' },
      { name: 'Asset Tracking', detail: 'Locate and manage valuable venue assets in real time.' },
    ],
    idealFor: ['Venue owners', 'Real estate operators', 'Smart city programmes', 'Universities'],
    keywords: ['Smart Venue OS UAE', 'Venue Analytics Dubai'],
  },
  {
    slug: 'digital-twin',
    code: 'P-07',
    title: 'Digital Twin',
    category: 'Venue',
    tagline: 'A living 3D replica of your venue, wired to reality.',
    summary:
      'Visualise, monitor and analyse physical spaces as continuously synchronised digital models. Our Digital Twin builds stream live telemetry into an explorable 3D environment — used for operations briefings, scenario planning and executive walkthroughs.',
    features: [
      { name: 'Visualization', detail: 'High-fidelity 3D venue models with layered system data.' },
      { name: 'Monitoring', detail: 'Live sensor, device and occupancy states rendered on the model.' },
      { name: 'Analytics', detail: 'Compare scenarios, spot anomalies and quantify space performance.' },
    ],
    idealFor: ['Developers & consultants', 'Facility managers', 'Control rooms', 'Government planners'],
    keywords: ['Digital Twin Dubai', '3D Venue Modelling UAE'],
  },
  {
    slug: 'event-soc',
    code: 'P-08',
    title: 'Event SOC',
    category: 'Security',
    tagline: 'A security operations centre purpose-built for live events.',
    summary:
      'Events compress months of risk into a handful of days. Event SOC delivers dedicated monitoring, threat detection and incident management for show networks, registration systems, OT/AV gear and vendor connections — staffed by CEH/CHFI-certified analysts using Splunk, QRadar and LogRhythm.',
    features: [
      { name: 'Security Monitoring', detail: '24x7 surveillance of event IT, network and critical AV systems.' },
      { name: 'Threat Detection', detail: 'Use-cases tuned to phishing, ransomware and rogue-device patterns at venues.' },
      { name: 'Incident Management', detail: 'Playbook-driven response with clear show-day escalation paths.' },
    ],
    idealFor: ['Event organisers', 'Venue operators', 'Government delegations', 'Exhibitors'],
    keywords: ['Cybersecurity Dubai', 'Event Security Operations UAE'],
  },
  {
    slug: 'knowledge-capture-engine',
    code: 'P-09',
    title: 'Knowledge Capture Engine',
    category: 'Intelligence',
    tagline: 'Turn voice into governed, searchable organisational knowledge.',
    summary:
      'Briefings, site visits, expert interviews and handover calls become structured knowledge articles automatically. The Knowledge Capture Engine transcribes, summarises and indexes spoken content so institutions stop losing expertise when conversations end.',
    features: [
      { name: 'Voice to Knowledge', detail: 'Recordings converted into tagged, citable knowledge entries.' },
      { name: 'Search', detail: 'Semantic retrieval across the entire spoken archive.' },
      { name: 'AI Summary', detail: 'Condensed briefs with named speakers, decisions and next steps.' },
    ],
    idealFor: ['Consultancies', 'Government archives', 'Engineering firms', 'Healthcare knowledge teams'],
    keywords: ['Knowledge Management AI UAE', 'AI Solutions UAE'],
  },
  {
    slug: 'smart-badge-platform',
    code: 'P-10',
    title: 'Smart Badge Platform',
    category: 'Intelligence',
    tagline: 'Badges that measure, connect and guide the visitor journey.',
    summary:
      'RFID/NFC credentialing that turns entry passes into live insight. Smart Badge Platform handles check-in, session and stand analytics, peer networking opt-ins and full visitor journey mapping — with privacy-first consent built into the workflow.',
    features: [
      { name: 'Check In', detail: 'Fast lane credentialing and gate scanning at scale.' },
      { name: 'Analytics', detail: 'Zone dwell, session attendance and exhibitor engagement metrics.' },
      { name: 'Networking', detail: 'Consent-based tap-to-connect between attendees.' },
      { name: 'Visitor Journey', detail: 'End-to-end path analysis from registration to exit.' },
    ],
    idealFor: ['Exhibition organisers', 'Conference producers', 'Trade shows', 'Corporate offsites'],
    keywords: ['Event Technology Dubai', 'Smart Badge UAE'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productCategories = ['All', 'Intelligence', 'Experience', 'Venue', 'Security'] as const;
