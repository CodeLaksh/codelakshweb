const siteUrl = 'https://codelaksh.in';

const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'CodeLaksh',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        'Premier AI Solutions & Software Development Company in India. Web Development, App Development, AI Chatbots, Machine Learning.',
      email: 'codelaksh@gmail.com',
      telephone: '+91-9834684866',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sangram Nagar',
        addressLocality: 'Aurangabad',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'CodeLaksh',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'CodeLaksh',
      image: `${siteUrl}/logo.png`,
      url: siteUrl,
      telephone: '+91-9834684866',
      email: 'codelaksh@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sangram Nagar',
        addressLocality: 'Aurangabad',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
