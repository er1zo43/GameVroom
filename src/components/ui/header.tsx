"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Truck,
  Home,
  Menu,
  X,
  Package,
  MapIcon,
  Building,
  Download,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Главная", icon: Home },
    { href: "/trucks", label: "Грузовики", icon: Truck },
    { href: "/trailers", label: "Прицепы", icon: Package },
    { href: "/maps", label: "Карта", icon: MapIcon },
    { href: "/carDealerships", label: "Автосалоны", icon: Building },
    { href: "/dlcs", label: "DLC", icon: Download },
  ];

  const accentColor = "text-blue-400"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "flex items-center gap-2",
                    isActive && accentColor,
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setIsContactModalOpen(true)}
          >
            <Mail className="h-4 w-4" />
            Контакты
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    className={cn(
                      "w-full justify-start gap-2",
                      isActive && accentColor,
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-border/40">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Mail className="h-4 w-4" />
                Контакты
              </Button>
            </div>
          </nav>
        </div>
      )}
      
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </header>
  );
}
