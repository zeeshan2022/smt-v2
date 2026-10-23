export interface Service {
  slug: string;
  title: string;
  group: string;
  summary: string;
  items: { name: string; detail: string }[];
  engagement: string;
}

export const services: Service[] = [
  {
    slug: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    group: 'Security',
    summary:
      'Independent, certification-backed security advice — from first vulnerability scan to board-level compliance readiness. Led by a CEH, CHFI and CISSP-track Information Security Associate Manager.',
    items: [
      { name: 'Vulnerability Assessment', detail: 'Authenticated, risk-ranked scanning of external, internal and cloud surfaces with validation.' },
      { name: 'Penetration Testing', detail: 'Scenario-based red-team style testing across web, network, wireless and social vectors.' },
      { name: 'Security Audits', detail: 'Configuration and control audits benchmarked against ISO 27001 and NIST frameworks.' },
      { name: 'Compliance Readiness', detail: 'Gap analysis, remediation roadmaps and evidence packaging for audits and regulators.' },
      { name: 'Managed Security', detail: 'Ongoing monitoring, detection engineering and incident response retainers.' },
    ],
    engagement: 'Fixed-scope assessments or monthly managed engagements.',
  },
  {
    slug: 'infrastructure-consulting',
    title: 'Infrastructure Consulting',
    group: 'Infrastructure',
    summary:
      'Networks and platforms designed the way CCNA-certified engineers design them: documented, segmented, monitored and ready to scale — proven at EXPO 2020 scale and in healthcare 24x7 environments.',
    items: [
      { name: 'Network Design', detail: 'Campus and branch architecture with VLANs, routing (OSPF/BGP/EIGRP), redundancy and QoS.' },
      { name: 'WiFi Solutions', detail: 'Predictive and on-site surveys, controller design and secure guest architectures.' },
      { name: 'Server Deployment', detail: 'Windows Server and Linux build, hardening, patch governance and lifecycle plans.' },
      { name: 'Virtualization', detail: 'VMware, Hyper-V and Oracle KVM host design, migration and resource optimisation.' },
      { name: 'Cloud Integration', detail: 'Azure and AWS landing zones, hybrid connectivity, backup and cost controls.' },
    ],
    engagement: 'Project-based design & deployment, or fractional infrastructure engineering.',
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    group: 'Artificial Intelligence',
    summary:
      'Pragmatic AI adoption: identify where models genuinely save time or money, then build them with security guardrails from day one — because an AI programme without data governance is just a breach waiting to happen.',
    items: [
      { name: 'AI Strategy', detail: 'Opportunity mapping, risk review and phased adoption roadmap for your organisation.' },
      { name: 'Automation', detail: 'Workflow automation with Python/C# and LLM pipelines that remove repetitive operations load.' },
      { name: 'Knowledge Systems', detail: 'RAG architectures over your documents, meetings and events — searchable and governed.' },
      { name: 'AI Agents', detail: 'Task agents with human-in-the-loop approval gates, audit logs and scoped permissions.' },
    ],
    engagement: 'Discovery workshop → pilot → production rollout.',
  },
  {
    slug: 'event-technology-consulting',
    title: 'Event Technology Consulting',
    group: 'Experience',
    summary:
      'Creative technology direction grounded in six months of EXPO 2020 operations. We plan experiences that photograph beautifully and survive contact with real crowds, real heat and real deadlines.',
    items: [
      { name: 'Projection Mapping', detail: 'Facade and dome mapping — content pipeline, alignment, redundancy (18 installations delivered at Expo).' },
      { name: 'Interactive Experiences', detail: 'Touch, motion, laser and kinetic interactives engineered for thousands of daily users.' },
      { name: 'Digital Signage', detail: 'Player networks, CMS and remote management with uptime monitoring.' },
      { name: 'AV Integration', detail: 'Show-critical audio/video systems designed alongside IT infrastructure.' },
      { name: 'Immersive Experiences', detail: 'AR, VR, holograms and immersive rooms for pavilions and brand spaces.' },
    ],
    engagement: 'Per-event delivery or venue-level experience programmes.',
  },
  {
    slug: 'systems-integration-services',
    title: 'Systems Integration',
    group: 'Integration',
    summary:
      'One accountable partner connecting AV, IT, security and building systems — managed end-to-end by an IT Head who has run multi-vendor programmes across UAE and Saudi Arabia.',
    items: [
      { name: 'Project Management', detail: 'Scope, schedule, vendor coordination and stakeholder reporting from FAT to handover.' },
      { name: 'Technical Consulting', detail: 'Architecture reviews, BOQ preparation and technology selection guidance.' },
      { name: 'Managed Support', detail: 'SLA-backed support, spares strategy and preventive maintenance schedules.' },
    ],
    engagement: 'Design-build projects and long-term integration support contracts.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
