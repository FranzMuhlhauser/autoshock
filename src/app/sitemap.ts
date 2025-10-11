import { MetadataRoute } from 'next';

// Este archivo sitemap.ts genera el mapa del sitio, que ayuda a los motores de búsqueda
// a descubrir y entender la estructura de tu web.
// https://www.sitemaps.org/protocol.html

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://auto-shock.example.com'; // Reemplazar con tu URL real

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // La página principal no cambia tan a menudo
      priority: 1, // Prioridad máxima, ya que es la página principal
    },
  ];
}
