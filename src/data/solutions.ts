export interface Solution {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcomes: string[];
  keywords: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'shield',
    summary: 'Offensive, defensive and governance-led security built by certified practitioners.',
    description:
      'Secure Media Tech delivers cybersecurity led by an Information Security Associate Manager with 14+ years protecting enterprise and national-scale environments — including EXPO 2020 Dubai. From vulnerability assessment and penetration testing to SOC/NOC monitoring, SIEM engineering and compliance readiness, our programs are mapped to real adversary behaviour, not checklists.',
    capabilities: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'SOC / NOC design, build and 24x7 monitoring',
      'SIEM engineering — Splunk, IBM QRadar, LogRhythm',
      'Incident Response & Digital Forensics (FTK, EnCase, Autopsy)',
      'Threat Intelligence & Security Monitoring',
      'Risk Management & Compliance Readiness (ISO 27001, NIST)',
      'Firewall & Network Security — Palo Alto, Fortinet, Cisco ASA',
      'Security Awareness & Governance Programs',
    ],
    outcomes: [
      'Reduced mean-time-to-detect and mean-time-to-respond',
      'Audit-ready compliance evidence and risk registers',
      'Prioritised, validated findings with executive reporting',
    ],
    keywords: ['Cybersecurity Dubai', 'Penetration Testing Dubai', 'Managed Security UAE'],
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    icon: 'server',
    summary: 'Enterprise networks, servers, virtualisation and cloud engineered for resilience.',
    description:
      'We design and operate infrastructure that has carried mission-critical workloads at EXPO 2020 Dubai, healthcare enterprises and government events. Our engineers hold CCNA/MCSA credentials and work across Cisco routing and switching, VMware and Hyper-V virtualisation, Azure and AWS cloud integration, backup and disaster recovery.',
    capabilities: [
      'Network Design — Cisco Routing, Switching, VLAN, VPN, MPLS',
      'Dynamic Routing — OSPF, EIGRP, BGP, HSRP, QoS',
      'Windows Server & Linux deployment and hardening',
      'Virtualisation — VMware, Hyper-V, Oracle KVM',
      'Cloud Integration — Microsoft Azure & AWS',
      'Backup Solutions & Disaster Recovery planning/testing',
      'Enterprise Wi-Fi design, survey and deployment',
      'NOC setup and infrastructure monitoring — SolarWinds',
    ],
    outcomes: [
      'High-availability architectures with documented DR runbooks',
      'Segmented, policy-driven networks ready for security audits',
      'Consolidated capacity and cost visibility across on-prem and cloud',
    ],
    keywords: ['Infrastructure Services Dubai', 'Network Design UAE', 'Managed IT Services UAE'],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    icon: 'brain',
    summary: 'Applied AI — assistants, agents, automation and knowledge systems that ship.',
    description:
      'Our AI practice turns large language models into dependable enterprise tooling: prompt-engineered workflows, AI agents with human-in-the-loop approval, knowledge systems built on your own data, and automation of the repetitive work that slows operations teams down. Led by practitioners who combine MS-level cybersecurity rigor with hands-on Python and C# engineering.',
    capabilities: [
      'AI Strategy & opportunity mapping',
      'Prompt Engineering & LLM workflow design',
      'AI Assistants & Agents with HITL guardrails',
      'Knowledge Systems & RAG over enterprise content',
      'Process Automation — Python, C#, Shell scripting',
      'Meeting & Event Intelligence pipelines',
      'AI safety, data-residency and governance reviews',
    ],
    outcomes: [
      'Measurable hours returned to operations through automation',
      'Searchable institutional knowledge instead of scattered recordings',
      'AI deployments with audit trails and human approval gates',
    ],
    keywords: ['AI Solutions UAE', 'AI Automation Dubai', 'AI Agents UAE'],
  },
  {
    slug: 'event-intelligence',
    title: 'Event Intelligence',
    icon: 'radar',
    summary: 'Turn live events into secure, searchable, actionable intelligence.',
    description:
      'Events generate enormous value that is usually lost the moment the session ends. Secure Media Tech captures, transcribes, summarises and secures every session — producing delegate portals, analytics and broadcast outputs while keeping sensitive content under sovereign control. Built by the team that delivered technology across six months of EXPO 2020 Dubai.',
    capabilities: [
      'Live multilingual transcription & captioning',
      'AI summarisation with human-in-the-loop approval',
      'Session analytics & attendance intelligence',
      'Delegate portals & secure knowledge search',
      'Broadcast & clipping engines',
      'Event SOC — security monitoring during live operations',
      'Smart badge capture and visitor journey analytics',
    ],
    outcomes: [
      'Every session becomes a searchable, citable asset within minutes',
      'Organisers gain real-time operational visibility',
      'Sensitive content stays inside governed, sovereign boundaries',
    ],
    keywords: ['Event Intelligence Platform UAE', 'Event Technology Dubai'],
  },
  {
    slug: 'interactive-experiences',
    title: 'Interactive Experiences',
    icon: 'sparkle',
    summary: 'Projection mapping, immersive spaces and installations that win headlines.',
    description:
      'From 18 projection mapping installations at EXPO 2020 Dubai to interactive trampolines and climbing walls at ADQ Arena 360, our studio craft — "Art Meets Technology" — produces experiences audiences photograph, share and remember. Every installation is engineered like infrastructure: redundant, monitored and secured.',
    capabilities: [
      'Large-scale Projection Mapping & Facade Projections',
      'Interactive Touch & Motion-Activated Systems',
      'Interactive Laser & Kinetic Experiences',
      'AR / VR / Hologram experiences',
      'Custom PCB & embedded interactive controls',
      '360 Photo Booths & Immersive Storytelling',
      'Digital Signage & AV Integration',
    ],
    outcomes: [
      'Proven delivery at EXPO 2020, GITEX, Dubai Airshow, ATM',
      'Installations with uptime SLAs and remote monitoring',
      'Content pipelines designed for fast show-critical changes',
    ],
    keywords: ['Projection Mapping Dubai', 'Interactive Installations Dubai'],
  },
  {
    slug: 'smart-venues',
    title: 'Smart Venues',
    icon: 'building',
    summary: 'Connected venues with occupancy intelligence, command centres and digital twins.',
    description:
      'We unify venue systems — network, AV, sensors, access control, signage — into a single intelligent operating layer. Venue Command Center dashboards surface crowd analytics, device health and incidents in one place, while Smart Venue OS and Digital Twin capabilities turn physical spaces into continuously measured digital assets.',
    capabilities: [
      'Venue Command Center deployment',
      'Crowd analytics & occupancy intelligence',
      'Device monitoring & incident management',
      'Smart Venue OS integration across subsystems',
      'Digital Twin visualisation & simulation',
      'Asset tracking & space utilisation analytics',
      'IoT sensor networks with secure onboarding',
    ],
    outcomes: [
      'One operational picture across every venue subsystem',
      'Faster incident resolution with correlated telemetry',
      'Data-driven space and energy decisions',
    ],
    keywords: ['Smart Venue Solutions UAE', 'Digital Twin Dubai'],
  },
  {
    slug: 'systems-integration',
    title: 'Systems Integration',
    icon: 'network',
    summary: 'One accountable partner from design and procurement to cutover and support.',
    description:
      'Multi-vendor programmes fail in the seams. As IT Head at ABRTECH Studio and through enterprise roles at Business Systems House, QAM Healthcare and Farnek at EXPO 2020, our team integrates AV, IT, security and building systems into single, testable, documented solutions — with project management that keeps stakeholders aligned.',
    capabilities: [
      'Cross-domain integration — AV, IT, Security, BMS',
      'Requirements analysis & solution architecture',
      'Vendor coordination, procurement & FAT/SAT testing',
      'Project management & technical consulting',
      'Structured cabling, racks & comms rooms',
      'Documentation, as-builts & handover training',
      'Managed support post-deployment',
    ],
    outcomes: [
      'Single point of accountability across vendors',
      'Tested cutovers with rollback plans',
      'Operational handover with complete documentation',
    ],
    keywords: ['Systems Integration UAE', 'AV Integration Dubai'],
  },
  {
    slug: 'managed-services',
    title: 'Managed Services',
    icon: 'pulse',
    summary: 'Proactive monitoring, security operations and support — delivered as a service.',
    description:
      'Secure Media Tech operates your technology like our own: SOC-backed security monitoring, NOC-managed infrastructure, patch and backup governance, and defined response SLAs. Healthcare-grade compliance discipline from QAM Healthcare meets event-grade uptime demands from EXPO 2020 operations.',
    capabilities: [
      '24x7 Managed Security (MDR-style) services',
      'Infrastructure monitoring & NOC operations',
      'Patch, backup & DR governance',
      'Endpoint & server lifecycle management',
      'Helpdesk and onsite engineering support',
      'Quarterly risk & performance reporting',
      'Compliance evidence maintenance',
    ],
    outcomes: [
      'Predictable monthly cost with contractual SLAs',
      'Fewer surprises — trending before failure',
      'Continuous compliance readiness',
    ],
    keywords: ['Managed IT Services UAE', 'Managed Security Dubai'],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
