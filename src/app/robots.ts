import { MetadataRoute } from 'next';

// Este archivo robots.ts le dice a los motores de búsqueda qué páginas pueden rastrear.
// Por defecto, permitimos que todo el sitio sea rastreado y enlazamos al sitemap.
// https://www.robotstxt.org/robotstxt.html

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://auto-shock.example.com'; // Reemplazar con tu URL real

  return {
    rules: {
      userAgent: '*', // Se aplica a todos los bots (Google, Bing, etc.)
      allow: '/',     // Permite rastrear todo el sitio
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
