"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Truck, Car, Home, Menu, X, Package, MapIcon, Building, Download } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  variant: "ets" | "ats";
}

export function Header({ variant }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isETS = variant === "ets";
  const baseRoute = isETS ? "/ets" : "/ats";
  
  const navigationItems = isETS 
    ? [
        { href: "/ets", label: "Главная", icon: Home },
        { href: "/ets/trucks", label: "Грузовики", icon: Truck },
        { href: "/ets/trailers", label: "Прицепы", icon: Package },
        { href: "/ets/maps", label: "Карты", icon: MapIcon },
        { href: "/ets/carDealerships", label: "Автосалоны", icon: Building },
        { href: "/ets/dlcs", label: "DLC", icon: Download },
      ]
    : [
        { href: "/ats", label: "Главная", icon: Home },
        { href: "/ats/trucks", label: "Грузовики", icon: Truck },
        { href: "/ats/trailers", label: "Прицепы", icon: Package },
      ];

  const brandColors = isETS 
    ? "from-blue-600 to-indigo-600"
    : "from-red-600 to-orange-600";

  const accentColor = isETS ? "text-blue-400" : "text-red-400";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={baseRoute} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
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
                    isActive && accentColor
                    8             )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Switch Game Button */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href={isETS ? "/ats" : "/ets"}>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              {isETS ? "ATS" : "ETS2"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
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
                      isActive && accentColor
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-border/40">
              <Link
                href={isETS ? "/ats" : "/ets"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Truck className="h-4 w-4" />
                  Перейти к {isETS ? "ATS" : "ETS2"}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}