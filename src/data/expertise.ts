export const founder = {
  name: 'Zeeshan Haider',
  role: 'Founder & Lead — Secure Media Tech',
  title: 'Information Security Associate Manager',
  location: 'Dubai, UAE',
  nationality: 'Pakistani',
  experience: '14+ Years',
  linkedin: 'https://www.linkedin.com/in/zeeshan-haider-smt',
  bio: [
    'Zeeshan Haider is an information security and technology leader with more than 14 years across cybersecurity, infrastructure, networking, event technology and artificial intelligence in the UAE and wider GCC.',
    'He currently serves as Information Security Associate Manager at Business Systems House, running security governance, architecture, compliance, risk and monitoring programmes. Before that he secured healthcare IT at QAM Healthcare and spent six months inside EXPO 2020 Dubai operations with Farnek as IT Engineer.',
    'As IT Head at ABRTECH Studio since 2021, he has designed and executed interactive installations, projection mapping and smart venue systems under one philosophy: Art Meets Technology.',
    'Secure Media Tech is the synthesis of both halves of his career — the security engineer who thinks like an attacker, and the experience designer who thinks like a visitor.',
  ],
  education: [
    { degree: 'MS Cyber Security', year: '2018' },
    { degree: 'BS Telecom & Networking', year: '2016' },
  ],
  certifications: ['CEH', 'CHFI', 'CCNA', 'MCSA', 'CompTIA Security+', 'CISSP'],
  certificationNames: [
    'Certified Ethical Hacker (CEH)',
    'Certified Hacking & Forensic Investigator (CHFI)',
    'Cisco Certified Network Associate (CCNA)',
    'Microsoft Certified Solutions Associate (MCSA)',
    'CompTIA Security+',
    'CISSP',
  ],
  professionalAreas: [
    'Cybersecurity', 'Information Security', 'AI Systems', 'Networking', 'Infrastructure',
    'Automation', 'Event Technology', 'Interactive Experiences', 'Projection Mapping',
    'Smart Venues', 'Systems Integration', 'Digital Forensics',
  ],
};

export const experienceTimeline = [
  {
    company: 'Business Systems House',
    role: 'Information Security Associate Manager',
    period: 'Aug 2024 – Present',
    points: ['Security Governance', 'Security Architecture', 'Compliance', 'Risk Management', 'Infrastructure Security', 'Monitoring', 'Incident Management'],
  },
  {
    company: 'ABRTECH STUDIO',
    role: 'IT Head',
    period: '2021 – Present',
    points: ['Event Technology Design', 'Interactive Experiences', 'Smart Systems', 'Infrastructure', 'Automation', 'Networking', 'Technical Execution', 'Systems Integration'],
  },
  {
    company: 'QAM Healthcare',
    role: 'Senior IT Engineer',
    period: 'Aug 2022 – Aug 2024',
    points: ['Healthcare IT', 'EHR', 'PACS', 'HIS', 'Security', 'Infrastructure', 'Backup', 'Compliance'],
  },
  {
    company: 'EXPO 2020 Dubai — Farnek',
    role: 'IT Engineer',
    period: 'May 2021 – Aug 2022',
    points: ['Event IT Operations', 'Infrastructure', 'Support', 'Enterprise Systems'],
  },
];

export const expertiseMatrix: Record<string, string[]> = {
  Cybersecurity: ['Vulnerability Assessment', 'Penetration Testing', 'SOC', 'NOC', 'SIEM', 'Incident Response', 'Threat Intelligence', 'Security Monitoring', 'Risk Management', 'Compliance'],
  'Security Technologies': ['Splunk', 'IBM QRadar', 'LogRhythm', 'Palo Alto', 'Fortinet', 'Cisco ASA', 'Snort', 'SolarWinds', 'Wireshark', 'NetWitness'],
  Networking: ['Cisco Routing', 'Cisco Switching', 'VLAN', 'VPN', 'MPLS', 'OSPF', 'EIGRP', 'BGP', 'HSRP', 'QoS'],
  Infrastructure: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Oracle KVM', 'Backup Solutions', 'Disaster Recovery'],
  Cloud: ['Microsoft Azure', 'AWS'],
  Programming: ['Python', 'C#', 'PHP', 'Shell Scripting'],
  AI: ['Prompt Engineering', 'AI Automation', 'Knowledge Systems', 'AI Assistants', 'AI Agents'],
  'Digital Forensics': ['FTK', 'EnCase', 'Autopsy', 'Sleuth Kit', 'Hex Analysis', 'Event Correlation'],
};

export const industries = [
  'Government', 'Healthcare', 'Education', 'Enterprise', 'Events', 'Exhibitions',
  'Real Estate', 'Hospitality', 'Transportation', 'Technology', 'Smart Cities', 'Defense',
];

export const ecosystemLayers = [
  {
    layer: 'Experience Layer',
    color: 'green',
    nodes: ['Projection Mapping', 'Interactive Installations', 'AI Digital Human', 'AI Concierge', 'AR / VR / Holograms', 'Digital Signage'],
  },
  {
    layer: 'Intelligence Layer',
    color: 'violet',
    nodes: ['Sovereign Event Intelligence', 'Meeting Intelligence', 'Knowledge Capture Engine', 'AI Agents & Automation', 'Analytics'],
  },
  {
    layer: 'Venue Layer',
    color: 'cyan',
    nodes: ['Venue Command Center', 'Smart Venue OS', 'Digital Twin', 'Smart Badge Platform', 'Crowd Analytics'],
  },
  {
    layer: 'Security Layer',
    color: 'cyan',
    nodes: ['Event SOC', 'SIEM — Splunk / QRadar / LogRhythm', 'VAPT & Threat Intel', 'Compliance & Risk', 'Digital Forensics'],
  },
  {
    layer: 'Infrastructure Layer',
    color: 'violet',
    nodes: ['Cisco Networking', 'VMware / Hyper-V / KVM', 'Azure & AWS', 'Windows & Linux Servers', 'Backup & DR'],
  },
];
