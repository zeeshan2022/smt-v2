export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  challenge: string;
  approach: string[];
  solution: string;
  results: string[];
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'expo-2020-projection-mapping-at-scale',
    title: 'Keeping 18 Projection Mapping Installations Alive for Six Months at EXPO 2020 Dubai',
    client: 'EXPO 2020 Dubai / Farnek',
    sector: 'Events & Exhibitions',
    year: '2021–2022',
    challenge:
      'A world expo cannot have a dark pavilion. Across six months of continuous operation, 18 projection mapping installations plus touch, motion, laser and PCB-controlled exhibits had to run daily under heavy crowds, ambient light drift, heat and an unforgiving press cycle.',
    approach: [
      'Engineered each installation with redundancy at the media-server and network layer',
      'Standardised alignment, calibration and content-deployment procedures across all 18 sites',
      'Integrated exhibit traffic onto segmented event networks with monitoring on every endpoint',
      'Ran structured day-two operations: nightly checks, spares rotation, incident playbooks',
    ],
    solution:
      'A single operations rhythm covering creative playback systems and enterprise IT alike — projectors, players, sensors and control PCs treated as monitored infrastructure rather than one-off AV gear.',
    results: [
      '18 projection mapping installations delivered and sustained across the Expo duration',
      'Interactive touch, motion, laser and PCB experiences operating daily for global visitors',
      'Operations model later reused for GITEX, Dubai Airshow and ATM deployments',
    ],
    stack: ['Projection Mapping', 'Media Servers', 'Cisco Networking', 'Monitoring', 'Embedded Control'],
  },
  {
    slug: 'ad360-sensor-driven-fan-zone',
    title: 'AD360 Abu Dhabi: Turning Sport into Data-Driven Play',
    client: 'AD360, Abu Dhabi',
    sector: 'Sports & Entertainment',
    year: '2022',
    challenge:
      'Fan zones live or die by queue energy. Interactive installations needed to be instantly understandable, physically durable and fun on repeat plays — while producing reliable telemetry operators could plan around.',
    approach: [
      'Designed sensor-driven gameplay for trampoline and climbing wall with real-time scoring',
      'Built the 360 photo booth with instant capture-and-share flow',
      'Hardened all hardware for continuous public use through show days',
    ],
    solution:
      'Three flagship interactives — Trampoline, Climbing Wall and 360 Photo Booth — running a shared show-control and monitoring backbone so one team could operate the whole zone.',
    results: [
      'High-throughput interactive zone with minimal show-day intervention',
      'Repeat-play engagement driven by score competition and shareable content',
      'Delivery template for subsequent sports and brand activations',
    ],
    stack: ['Motion Tracking', 'Real-time Graphics', 'Show Control', 'Event Networking'],
  },
  {
    slug: 'healthcare-infrastructure-compliance',
    title: 'Healthcare IT Without Downtime: EHR, PACS and Compliance at QAM Healthcare',
    client: 'QAM Healthcare',
    sector: 'Healthcare',
    year: '2022–2024',
    challenge:
      'Clinical systems never pause. EHR, PACS and HIS platforms had to stay available, backed up and compliant while infrastructure aged and security expectations rose across UAE healthcare.',
    approach: [
      'Owned infrastructure, backup and recovery governance for clinical applications',
      'Aligned security controls and access policies to healthcare compliance requirements',
      'Maintained imaging (PACS) performance against strict radiology workflow demands',
    ],
    solution:
      'A layered programme: hardened server and virtualisation platforms, tested backup/DR routines, and security monitoring applied with the same rigour used in SOC environments.',
    results: [
      'Steady-state availability for EHR/PACS/HIS across the engagement period',
      'Documented backup and DR posture ready for audit',
      'Security-first operational culture carried directly into Secure Media Tech services',
    ],
    stack: ['Windows Server', 'VMware', 'Backup & DR', 'Security Monitoring', 'Compliance'],
  },
  {
    slug: 'secure-event-intelligence-vision',
    title: 'Designing Sovereign Event Intelligence from Expo Pain Points',
    client: 'Secure Media Tech Product Programme',
    sector: 'Technology & AI',
    year: '2024–2026',
    challenge:
      'After six months inside EXPO 2020 operations, the pattern was clear: summits generate enormous institutional knowledge that evaporates because recordings sit unwatched, transcripts are late, and sensitive sessions can’t leave the room.',
    approach: [
      'Mapped every post-event deliverable organisers actually needed: summaries, clips, analytics, archives',
      'Applied cybersecurity data-governance thinking to audio pipelines — sovereign hosting, role-based access',
      'Inserted human-in-the-loop approval before any AI-generated content is published',
      'Built delegate portal and broadcast engine as first-class platform outputs',
    ],
    solution:
      'Sovereign Event Intelligence — live transcription, AI summarisation, HITL editorial control, knowledge search, analytics and broadcast in one governed platform.',
    results: [
      'Flagship product line now offered to government and enterprise event owners',
      'Extended into Meeting Intelligence and Knowledge Capture Engine for internal use',
      'Differentiated from generic AI note tools by security pedigree and event operations experience',
    ],
    stack: ['AI/LLM Pipelines', 'Speech-to-Text', 'RAG Knowledge Search', 'Azure', 'Security Governance'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
