import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const appName = "Amortiguadores Auto Shock";
const description = "Más de 25 años de experiencia en la venta de repuestos automotrices. Amortiguadores, trenes delanteros, portalones y más. Calidad premium que impulsa tu camino.";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: `${appName} | Calidad Premium que Impulsa tu Camino`,
  description: description,
  keywords: ['amortiguadores', 'tren delantero', 'repuestos automotrices', 'Auto Shock', 'Chile', 'suspensión', 'viña del mar'],
  authors: [{ name: appName }],
  creator: appName,
  publisher: appName,
  robots: 'index, follow',
  openGraph: {
    title: appName,
    description: description,
    url: 'https://auto-shock.example.com', // Replace with actual URL
    siteName: appName,
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Taller mecánico de Auto Shock',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: description,
    images: ['https://picsum.photos/seed/twitter-image/1200/600'], // Replace with actual Twitter image
  },
  metadataBase: new URL('https://auto-shock.example.com'), // Replace with actual URL
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Amortiguadores Auto Shock',
  description: 'Venta de repuestos automotrices como amortiguadores, trenes delanteros y portalones.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Benidorm 1280',
    addressLocality: 'Viña del Mar',
    addressRegion: 'Valparaíso',
    postalCode: '2520000',
    addressCountry: 'CL',
  },
  telephone: '+56986908605',
  email: 'auto_shock@hotmail.com',
  url: 'https://auto-shock.example.com', // Replace with actual URL
  image: 'https://picsum.photos/seed/og-image/1200/630',
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("font-body antialiased", "min-w-[320px]")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
