// Industry verticals served by Secure Media Tech — challenges, solutions,
// technologies and relevant product lines drawn from real deployments.

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  products: string[]; // product slugs from data/products.ts
}

export const industryList: Industry[] = [
  {
    slug: 'government',
    name: 'Government',
    icon: 'building',
    intro:
      'Sovereign-first technology for ministries, authorities and national events — built on the same governance discipline applied to enterprise security programmes in the UAE.',
    challenges: [
      'Data sovereignty and in-country processing requirements',
      'Protecting public-facing events and venues from cyber threats',
      'Auditable AI outputs before anything is published',
      'Legacy infrastructure integration without service disruption',
    ],
    solutions: [
      'Sovereign Event Intelligence with human-in-the-loop approval',
      'Security governance, compliance and risk management programmes',
      'Event SOC monitoring for national-scale gatherings',
      'Secure systems integration between legacy and modern platforms',
    ],
    technologies: ['Splunk', 'IBM QRadar', 'Palo Alto', 'Azure', 'Linux', 'SIEM/SOC'],
    products: ['sovereign-event-intelligence', 'event-soc', 'knowledge-capture-engine'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'pulse',
    intro:
      'Hardened healthcare IT shaped by two years running hospital systems at QAM Healthcare — EHR, PACS and HIS under strict availability and compliance demands.',
    challenges: [
      'Patient-data confidentiality and access control',
      '24/7 availability for EHR, PACS and HIS platforms',
      'Backup, disaster recovery and ransomware resilience',
      'Medical device and imaging network segmentation',
    ],
    solutions: [
      'Healthcare infrastructure security and network segmentation',
      'Backup and disaster-recovery architecture (VMware, Hyper-V)',
      'Vulnerability assessment and penetration testing for clinical systems',
      'Compliance readiness programmes and security monitoring',
    ],
    technologies: ['Windows Server', 'VMware', 'Enterprise backup & DR', 'Cisco ASA', 'Security monitoring'],
    products: ['venue-command-center', 'smart-venue-os', 'digital-twin'],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: 'badge',
    intro:
      'Campus technology and immersive experiences delivered for NYUAD and university exhibitions — blending research-grade networking with visitor-facing interactivity.',
    challenges: [
      'Large, diverse user populations on shared networks',
      'Securing campus IoT and interactive installations',
      'Engaging open-days and exhibitions on limited budgets',
      'Knowledge retention across departments and cohorts',
    ],
    solutions: [
      'Interactive exhibition and campus experience design',
      'Campus WiFi, VLAN and access-control engineering',
      'AI knowledge capture for lectures and events',
      'Meeting intelligence for faculty and governance boards',
    ],
    technologies: ['Cisco switching', 'VLAN/802.1X', 'Projection mapping', 'Python', 'AI transcription'],
    products: ['meeting-intelligence', 'ai-digital-human', 'knowledge-capture-engine'],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    icon: 'network',
    intro:
      'Enterprise security governance and infrastructure work at Business Systems House level — architecture, compliance, monitoring and incident management for large organisations.',
    challenges: [
      'Distributed estates with inconsistent security posture',
      'SOC alert overload and slow incident response',
      'Cloud migration with compliance obligations',
      'Board-level reporting on cyber risk',
    ],
    solutions: [
      'Managed security services: SOC, NOC, SIEM engineering',
      'Penetration testing and vulnerability management',
      'Azure/AWS landing zones and hybrid connectivity',
      'Executive dashboards and risk reporting',
    ],
    technologies: ['Splunk', 'LogRhythm', 'Fortinet', 'BGP/OSPF/MPLS', 'Azure', 'AWS'],
    products: ['venue-command-center', 'event-soc', 'smart-badge-platform'],
  },
  {
    slug: 'events',
    name: 'Events',
    icon: 'sparkle',
    intro:
      'Six months of continuous EXPO 2020 Dubai operations taught us how events actually break — and how to engineer them so they do not.',
    challenges: [
      'Zero tolerance for downtime during live shows',
      'Crowd safety plus cyber exposure on event networks',
      'Turning content into searchable organisational knowledge',
      'Multi-language delegate experience at international summits',
    ],
    solutions: [
      'Live event intelligence: transcription, AI summary, broadcast',
      'Redundant show-control and media-server architecture',
      'Event SOC for networked AV and crowd surfaces',
      'Delegate portals and smart badge journeys',
    ],
    technologies: ['Discreet-class media servers', 'Projection mapping', 'Motion sensors', 'PCB-controlled installs', 'SIEM'],
    products: ['sovereign-event-intelligence', 'smart-badge-platform', 'event-soc'],
  },
  {
    slug: 'exhibitions',
    name: 'Exhibitions',
    icon: 'eye',
    intro:
      'Stand technology for GITEX, ATM Dubai, ATM Saudi and Disability Expo — where footfall must convert into measurable pipeline.',
    challenges: [
      'Standing out on crowded exhibition floors',
      'Capturing qualified leads, not just badge scans',
      'Fast, repeatable deployment across cities',
      'Proving ROI after the show ends',
    ],
    solutions: [
      'Interactive stands: touch, motion, laser and kinetic experiences',
      '360 photo booths and branded content capture',
      'Lead capture via AI digital humans and smart badges',
      'Post-show analytics and knowledge retention',
    ],
    technologies: ['Kinect-class motion sensing', 'Laser systems', 'Interactive screens', 'Analytics pipelines'],
    products: ['ai-digital-human', 'smart-badge-platform', 'knowledge-capture-engine'],
  },
  {
    slug: 'smart-cities',
    name: 'Smart Cities',
    icon: 'globe',
    intro:
      'Venue and city-scale intelligence aligned with UAE smart-city ambitions — occupancy, assets and operations unified in one command layer.',
    challenges: [
      'Fragmented IoT estates with no single operational view',
      'Public-network security for connected facilities',
      'Sustainability and occupancy optimisation targets',
      'Interoperability across vendors and protocols',
    ],
    solutions: [
      'Smart Venue OS unifying occupancy and analytics',
      'Digital twin visualisation and monitoring',
      'Command-centre operations dashboards',
      'Secure IoT segmentation and monitoring',
    ],
    technologies: ['IoT gateways', 'Wireshark-level traffic analysis', 'Snort', 'SolarWinds', 'Cloud (Azure IoT)'],
    products: ['smart-venue-os', 'digital-twin', 'venue-command-center'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'building',
    intro:
      'Immersive sales centres and development launches for Dubai Holding and Aldar-class clients — where experience moves deal velocity.',
    challenges: [
      'Selling off-plan visions before buildings exist',
      'Differentiating in saturated launch calendars',
      'Visitor analytics inside sales galleries',
      'Handover-phase building systems intelligence',
    ],
    solutions: [
      'Projection-mapped scale models and immersive galleries',
      'Interactive masterplan exploration surfaces',
      'Visitor journey analytics via smart badges',
      'Post-handover smart venue operations',
    ],
    technologies: ['Edge-blend projection', 'AR overlays', 'Touch walls', 'Occupancy sensors'],
    products: ['ai-concierge', 'smart-badge-platform', 'smart-venue-os'],
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    icon: 'radar',
    intro:
      'Technology installations delivered for RTA and aviation-facing events including Dubai Airshow — operational reliability above all.',
    challenges: [
      'Public-facing installations in high-throughput environments',
      'Strict uptime SLAs and maintenance windows',
      'Securing OT-adjacent networks',
      'Wayfinding and passenger information at scale',
    ],
    solutions: [
      'Durable interactive wayfinding and signage systems',
      'Network design with HSRP/QoS for critical flows',
      'Monitoring and incident playbooks for public tech',
      'AI concierge for navigation and traveller assistance',
    ],
    technologies: ['Digital signage', 'Cisco routing', 'VPN', 'QoS', 'NOC monitoring'],
    products: ['ai-concierge', 'venue-command-center', 'event-soc'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: 'badge',
    intro:
      'Guest-facing intelligence for venues and properties — from arrival experience to back-of-house operations visibility.',
    challenges: [
      'Rising guest expectations for personalised experiences',
      'Staff workload and knowledge gaps across shifts',
      'Revenue per square metre in F&B and event spaces',
      'Cyber exposure on guest WiFi and IoT devices',
    ],
    solutions: [
      'AI concierge for guest service and recommendations',
      'Occupancy and asset analytics for space optimisation',
      'Segmented guest networks with active monitoring',
      'Immersive venue moments that drive social reach',
    ],
    technologies: ['WiFi 6 design', 'Guest-network segmentation', 'Analytics', 'Voice AI'],
    products: ['ai-concierge', 'smart-venue-os', 'digital-twin'],
  },
];
