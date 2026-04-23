export const siteConfig = {
  name: 'Niels Freier',
  title:
    'Niels Freier — Independent advisor on architecture, data platforms, AI, and transformation',
  description:
    'Independent advisor on architecture, data platforms, AI, and transformation. Founder of Arkham Advisory and writer at The Arkham Times.',
  url: 'https://niels.freier.fr',
  locale: 'en_GB',
  links: {
    arkhamTimes: 'https://arkham-times.com',
    arkhamAdvisory: 'https://arkham-advisory.com',
    linkedin: 'https://www.linkedin.com/in/nielsfreier',
    github: 'https://github.com/stumpyfr',
    email: 'niels.freier@outlook.com',
  },
  heroVariant: 'hero-variant-01-constellation',
  assets: {
    og: '/social-preview.png',
    favicon: '/favicon.png',
    appleTouchIcon: '/apple-touch-icon.png',
    brandMark: '/assets/brand/monogram-reference-crop.png',
    wordmark: '/assets/brand/wordmark-reference-crop.png',
    hero: {
      'hero-variant-01-constellation':
        '/assets/hero/hero-variant-01-constellation.png',
      'hero-variant-02-layered-systems':
        '/assets/hero/hero-variant-02-layered-systems.png',
      'hero-variant-03-topographic-network':
        '/assets/hero/hero-variant-03-topographic-network.png',
    },
    speakingMedia: '/assets/sections/speaking-media-stage_vNF.png',
    projects: '/assets/sections/projects-landscape.png',
  },
};

export const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Speaking & Media', href: '/speaking-media' },
  { label: 'Contact', href: '/contact' },
];

export const externalNavLinks = [
  { label: 'Arkham Times', href: siteConfig.links.arkhamTimes },
  { label: 'Arkham Advisory', href: siteConfig.links.arkhamAdvisory },
];

export function externalLinkAttrs() {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  } as const;
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
