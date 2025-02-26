import '../styles/globals.css';
import { IBM_Plex_Sans_Arabic as ibmPlexSansArabic } from 'next/font/google';

const ibmFont = ibmPlexSansArabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap', // لتجنب مشاكل التحميل
});

const RootLayout = ({ children }) => (
  <html lang="ar">
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
    <body className={ibmFont.className}>{children}</body>
  </html>
);

export default RootLayout;
