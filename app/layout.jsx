import { Montserrat, Poppins } from 'next/font/google';
import StructuredData from '@/components/StructuredData';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = 'https://codelaksh.in';
const siteTitle = 'CodeLaksh | AI Solutions & Software Development';
const siteDescription =
  'CodeLaksh - Premier AI Solutions & Software Development Company in India. Web Development, App Development, AI Chatbots, Machine Learning.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | CodeLaksh',
  },
  description: siteDescription,
  keywords: [
    'AI solutions',
    'AI chatbot development',
    'web development company India',
    'app development',
    'machine learning',
    'software development company India',
    'CodeLaksh',
  ],
  authors: [{ name: 'CodeLaksh' }],
  creator: 'CodeLaksh',
  publisher: 'CodeLaksh',
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: 'Transform your business with cutting-edge AI technology.',
    url: siteUrl,
    siteName: 'CodeLaksh',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0483d2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
