// Canonical blog taxonomy for the Insights section.
export const BLOG_CATEGORIES = [
  'Cybersecurity',
  'Artificial Intelligence',
  'Infrastructure',
  'Event Technology',
  'Interactive Experiences',
  'Smart Venues',
  'Automation',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

// Normalise free-form frontmatter categories into the canonical taxonomy.
const ALIASES: Record<string, BlogCategory> = {
  'event security': 'Event Technology',
  'ai & automation': 'Automation',
  'ai': 'Artificial Intelligence',
  'automation': 'Automation',
  'cybersecurity': 'Cybersecurity',
  'security': 'Cybersecurity',
  'infrastructure': 'Infrastructure',
  'it infrastructure': 'Infrastructure',
  'networking': 'Infrastructure',
  'interactive experiences': 'Interactive Experiences',
  'immersive tech': 'Interactive Experiences',
  'smart venues': 'Smart Venues',
  'venue technology': 'Smart Venues',
  'event technology': 'Event Technology',
};

export function normalizeCategory(raw: string): BlogCategory {
  const key = raw.toLowerCase().trim();
  if (ALIASES[key]) return ALIASES[key];
  const match = BLOG_CATEGORIES.find((c) => c.toLowerCase() === key);
  return match ?? 'Cybersecurity';
}
