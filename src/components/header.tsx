
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Productos', href: '#productos' },
  { name: 'Marcas', href: '#marcas' },
  { name: 'Nosotros', href: '#nosotros' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo-auto-shock');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2" aria-label="Amortiguadores Auto Shock Home">
          {logoImage && (
            <Image 
              src={logoImage.imageUrl} 
              alt={logoImage.description}
              width={160} 
              height={24}
              data-ai-hint={logoImage.imageHint}
            />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/70 transition-colors hover:text-foreground relative group text-lg"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
          <Button asChild className="rounded-full">
            <Link href="#contacto">Contacto</Link>
          </Button>
        </nav>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
             <SheetHeader className="flex-row justify-between items-center mb-8">
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                <div className="flex items-center gap-2">
                  {logoImage && (
                    <Image 
                      src={logoImage.imageUrl} 
                      alt={logoImage.description}
                      width={160} 
                      height={24}
                      data-ai-hint={logoImage.imageHint}
                    />
                  )}
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </SheetClose>
              </SheetHeader>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
