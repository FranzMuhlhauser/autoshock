import type {NextConfig} from 'next';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // En producción, es mejor fallar la compilación si hay errores de TypeScript.
    ignoreBuildErrors: false,
  },
  eslint: {
    // Forzar la revisión de ESLint durante la compilación para mantener la calidad del código.
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Aplicar estas cabeceras a todas las rutas de la aplicación.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  experimental: {
    // Esta opción ya no es necesaria aquí o está en el lugar incorrecto.
  },
  allowedDevOrigins: [
    'https://*.cloudworkstations.dev',
  ],
};

export default nextConfig;
