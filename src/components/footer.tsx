import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Especialidades', href: '#productos' },
  { name: 'Marcas', href: '#marcas' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border/50">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna Auto Shock */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">
                            <span className="text-premium-yellow">Auto</span> Shock
                        </h3>
                        <p className="max-w-xs text-muted-foreground">
                            Repuestos automotrices de calidad, para todas las marcas.
                        </p>
                        <p className="max-w-xs text-muted-foreground text-sm">
                            Más de 25 años de experiencia en Viña del Mar.
                        </p>
                    </div>

                    {/* Columna Enlaces Rápidos */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna Contacto */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary/70" />
                                <span>Av. Benidorm 1280, Viña del Mar</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-primary/70" />
                                <a href="tel:+56986908605" className="hover:text-primary transition-colors">+56 9 8690 8605</a>
                            </li>
                             <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary/70" />
                                <a href="mailto:auto_shock@hotmail.com" className="hover:text-primary transition-colors">auto_shock@hotmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Facebook className="h-4 w-4 text-primary/70" />
                                <a href="https://www.facebook.com/amortiguadores.autoshock" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook Oficial</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Amortiguadores Auto Shock. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
