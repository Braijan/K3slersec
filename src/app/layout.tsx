import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'blog',
    'cybersecurity',
    'pentesting',
    'bug bounty',
    'penetration testing,',
    'hacking',
    'infosec',
    'security',
    'k3strelsec',
    'ethical hacking',
    'cybersecurity blog',
    'pentesting blog',
    'bug bounty blog',
    'hacking blog',
    'infosec blog',
    'security blog',
    'k3strelsec blog',
    'ethical hacking blog',
  ],
  authors: [
    {
      name: 'k3strel Sec',
      url: 'https://github.com/braijan',
    },
  ],
  creator: 'k3strel Sec',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: '@x_k3strel_x',
  },
  icons: {
    icon: '/icon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
