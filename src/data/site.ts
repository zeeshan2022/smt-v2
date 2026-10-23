// Central site configuration — single source of truth.

export const SITE = {
  name: 'Secure Media Tech',
  shortName: 'SMT',
  tagline: 'Building Secure Digital Experiences, Intelligent Venues, and Enterprise Technology Solutions.',
  url: 'https://securemediatech.com',
  location: 'Dubai, United Arab Emirates',
  founder: 'Zeeshan Haider',
  mobile: '+971582035980',
  mobileDisplay: '+971 58 20 35980',
  whatsapp: '971582035980',
  office: '+97144477227',
  officeDisplay: '+971 444 77 22 7',
  email: 'info@securemediatech.com',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  'Hello Secure Media Tech, I would like to discuss a project.'
)}`;

export const telHref = (num: string) => `tel:${num.replace(/\s/g, '')}`;
