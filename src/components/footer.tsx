
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Productos', href: '#productos' },
  { name: 'Marcas', href: '#marcas' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border/50">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Image src="/images/logo_auto_shock.webp" alt="Auto Shock Logo" width={160} height={24} />
                        </div>
                        <p className="max-w-xs text-muted-foreground">
                            Calidad premium en repuestos automotrices que impulsa tu camino, con más de 25 años de experiencia.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
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

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary/70" />
                                <span>Avenida Benidorm 1280, Viña del Mar, Chile</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary/70" />
                                <a href="tel:+56212345678" className="hover:text-primary transition-colors">+56 2 1234 5678</a>
                            </li>
                             <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary/70" />
                                <a href="mailto:contacto@autoshock.cl" className="hover:text-primary transition-colors">contacto@autoshock.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Amortiguadores Auto Shock. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
