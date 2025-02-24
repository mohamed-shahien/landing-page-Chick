import '../styles/globals.css';
import { ibmPlexSansArabic } from 'next/font/google';

const ibmPlexSans = ibmPlexSansArabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body className={ibmPlexSans.className}>{children}</body>
  </html>
);

export default RootLayout;
