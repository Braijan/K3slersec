type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: 'K3strel Sec',
  description:
    'An Open source Technical Blog related to cybersecurity, pentesting, and bug bounty hunting.',
  url: 'https://k3strelsec.vercel.app/',
  ogImage: 'https://k3strelsec.vercel.app/og',
  links: {
    twitter: 'https://x.com/x_k3strel_x',
    github: 'https://github.com/Braijan',
  },
};
