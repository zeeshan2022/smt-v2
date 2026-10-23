export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: 'Expo & World Events' | 'Interactive Installations' | 'Enterprise & Government';
  location: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  role: string;
}

export const projects: Project[] = [
  {
    slug: 'expo-2020-dubai',
    title: 'EXPO 2020 Dubai — Pavilion Technology & Projection Mapping',
    client: 'Farnek (via EXPO 2020 Dubai)',
    year: '2021–2022',
    category: 'Expo & World Events',
    location: 'Dubai, UAE',
    summary:
      'Six months of continuous operations at the world expo as IT Engineer with Farnek: delivering and sustaining 18 projection mapping installations alongside interactive touch, motion-activated, laser and PCB-controlled experiences — all running on event-grade infrastructure with enterprise uptime expectations.',
    deliverables: [
      '18 projection mapping installations designed, aligned and maintained',
      'Interactive touch systems across pavilion zones',
      'Motion-activated guest experiences',
      'Interactive laser installations',
      'Custom PCB-controlled interactive exhibits',
      'Day-two operations, monitoring and support throughout Expo duration',
    ],
    technologies: ['Projection Mapping', 'Touch Interactives', 'Motion Sensors', 'Laser Systems', 'Embedded PCB Control', 'Cisco Networking', 'Windows Server'],
    role: 'IT Engineer — Event IT Operations, Infrastructure & Enterprise Systems',
  },
  {
    slug: 'ad360-abu-dhabi',
    title: 'ADNEC Arena 360 — Fan-Zone Interactive Experiences',
    client: 'AD360, Abu Dhabi',
    year: '2022',
    category: 'Interactive Installations',
    location: 'Abu Dhabi, UAE',
    summary:
      'High-energy audience interactivity for a major sports entertainment destination: an interactive trampoline, an interactive climbing wall and a 360 photo booth — engineered for thousands of daily participants with zero show-day downtime targets.',
    deliverables: [
      'Interactive Trampoline with sensor-driven visual feedback',
      'Interactive Climbing Wall with real-time scoring',
      '360 Photo Booth experience with instant sharing',
      'On-site technical operations during event runs',
    ],
    technologies: ['Motion Tracking', 'Interactive Surfaces', 'Real-time Graphics', 'AV Integration', 'Event Networking'],
    role: 'Technical Design & Execution Lead',
  },
  {
    slug: 'nyuad',
    title: 'NYU Abu Dhabi — Interactive Event Technology',
    client: 'New York University Abu Dhabi',
    year: '2022',
    category: 'Interactive Installations',
    location: 'Saadiyat Island, Abu Dhabi',
    summary:
      'Interactive event technology deployment for academic and cultural programming at NYUAD, blending immersive visuals with reliable campus-network integration and accessibility-conscious interaction design.',
    deliverables: [
      'Interactive event technology deployment',
      'Immersive visual content playback setup',
      'Campus network integration and security compliance',
    ],
    technologies: ['Interactive Displays', 'Media Servers', 'Networking', 'AV Systems'],
    role: 'Event Technology Deployment',
  },
  {
    slug: 'dubai-holding-womens-day',
    title: 'Dubai Holding — Women’s Day Interactive Experience',
    client: 'Dubai Holding',
    year: '2023',
    category: 'Interactive Installations',
    location: 'Dubai, UAE',
    summary:
      'A commemorative interactive installation for Dubai Holding’s Women’s Day activation — combining responsive digital storytelling with premium presentation standards expected by one of the region’s largest landowners and developers.',
    deliverables: [
      'Concept-to-execution interactive experience',
      'Responsive touch/visual installation',
      'On-location production and support',
    ],
    technologies: ['Interactive Touch', 'Digital Signage', 'Content Pipelines', 'Show Control'],
    role: 'Design, Build & Technical Execution',
  },
  {
    slug: 'gitex',
    title: 'GITEX — Interactive Technology Deployment',
    client: 'GITEX Global, Dubai',
    year: '2021–2023',
    category: 'Expo & World Events',
    location: 'Dubai World Trade Centre',
    summary:
      'Interactive stand and visitor-experience technology across editions of GITEX, the region’s largest technology week — deployed inside the demanding connectivity and crowd conditions of Dubai World Trade Centre.',
    deliverables: [
      'Interactive technology deployment on exhibition stands',
      'Visitor engagement screens and demos',
      'Show-day operations and support',
    ],
    technologies: ['Interactive Screens', 'Wi-Fi Engineering', 'Media Playback', 'Lead Capture'],
    role: 'Technology Deployment & Operations',
  },
  {
    slug: 'disability-expo',
    title: 'Abu Dhabi Disability Expo — Accessible Interactive Experiences',
    client: 'Disability Expo',
    year: '2022',
    category: 'Interactive Installations',
    location: 'Abu Dhabi, UAE',
    summary:
      'Inclusive interactive experiences designed for accessibility first — interfaces reachable, readable and engaging for visitors of determination, proving that immersive technology works best when everyone can use it.',
    deliverables: [
      'Accessible interactive installations',
      'Adapted UI heights, contrast and input methods',
      'Exhibition-floor technical operations',
    ],
    technologies: ['Accessibility Design', 'Touch Interactives', 'Digital Signage'],
    role: 'Interactive Experience Delivery',
  },
  {
    slug: 'rta',
    title: 'RTA — Technology Installation',
    client: 'Roads & Transport Authority, Dubai',
    year: '2022',
    category: 'Enterprise & Government',
    location: 'Dubai, UAE',
    summary:
      'Government-grade technology installation for RTA with strict change-management, security and documentation requirements — infrastructure delivered to public-sector operating standards.',
    deliverables: [
      'Technology installation in a regulated government environment',
      'Secure network integration',
      'As-built documentation and handover',
    ],
    technologies: ['Enterprise Networking', 'Server Systems', 'Security Hardening'],
    role: 'Installation & Integration',
  },
  {
    slug: 'dubai-airshow',
    title: 'Dubai Airshow — Interactive Installations & Technology Deployment',
    client: 'Dubai Airshow',
    year: '2023',
    category: 'Expo & World Events',
    location: 'Al Maktoum International Airport, Dubai',
    summary:
      'Interactive installations and full technology deployment at one of the world’s biggest aerospace exhibitions — a hardened desert site with defence-grade access control where reliability under sun, dust and crowds is non-negotiable.',
    deliverables: [
      'Interactive installations for exhibitor and visitor zones',
      'Complete show technology deployment',
      'Field networking across an airshow environment',
    ],
    technologies: ['Outdoor-rated AV', 'Interactive Systems', 'Field Networking', 'Power Redundancy'],
    role: 'Technology Deployment Lead',
  },
  {
    slug: 'aldar',
    title: 'Aldar — Technology Experience Deployment',
    client: 'Aldar Properties, Abu Dhabi',
    year: '2022',
    category: 'Enterprise & Government',
    location: 'Abu Dhabi, UAE',
    summary:
      'Immersive sales-and-branding technology for Aldar developments — bringing master-plan storytelling to life in customer-facing spaces with the operational polish a leading developer demands.',
    deliverables: [
      'Experience technology deployment in sales environments',
      'Integrated playback and interactive displays',
      'Ongoing content-change support',
    ],
    technologies: ['Digital Signage', 'Interactive Displays', 'Media Servers'],
    role: 'Experience Deployment',
  },
  {
    slug: 'masdar',
    title: 'Masdar — Control Center Support',
    client: 'Masdar, Abu Dhabi Future Energy Company',
    year: '2022',
    category: 'Enterprise & Government',
    location: 'Abu Dhabi, UAE',
    summary:
      'Operational support inside Masdar’s control-centre environment — monitoring, troubleshooting and maintaining the systems that keep a smart-city pioneer’s operations visible and secure.',
    deliverables: [
      'Control center systems support',
      'Monitoring and incident coordination',
      'Infrastructure upkeep in an OT-adjacent environment',
    ],
    technologies: ['Control Room Systems', 'Monitoring Tools', 'Network Operations'],
    role: 'Control Center Support Engineer',
  },
  {
    slug: 'atm-dubai-police',
    title: 'ATM Dubai Police — Interactive Stand Technology',
    client: 'Dubai Police, ATM Exhibition',
    year: '2022',
    category: 'Interactive Installations',
    location: 'Dubai, UAE',
    summary:
      'Interactive stand technology for Dubai Police at the Arabian Travel Market — visitor-facing digital experiences representing a national institution on one of travel industry’s biggest stages.',
    deliverables: [
      'Interactive stand technology build',
      'Visitor engagement applications',
      'Show-floor operations for the event duration',
    ],
    technologies: ['Interactive Touch', 'Kiosk Systems', 'Event Networking'],
    role: 'Stand Technology Delivery',
  },
  {
    slug: 'atm-saudi',
    title: 'ATM Saudi Arabia — Interactive Experience Deployment',
    client: 'Arabian Travel Market, Saudi Arabia',
    year: '2023',
    category: 'Interactive Installations',
    location: 'Riyadh, Saudi Arabia',
    summary:
      'Cross-border delivery of interactive experiences at ATM Saudi Arabia as the kingdom’s tourism sector opened its doors — proof our experience pipeline travels cleanly between countries and regulators.',
    deliverables: [
      'Interactive experience deployment at ATM Saudi',
      'Remote content management during show days',
      'Local partner coordination and logistics',
    ],
    technologies: ['Interactive Systems', 'Cloud Content Ops', 'AV Integration'],
    role: 'Deployment & Coordination Lead',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ['All', 'Expo & World Events', 'Interactive Installations', 'Enterprise & Government'] as const;
