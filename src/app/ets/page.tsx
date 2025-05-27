import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, MapIcon, Car, Download, ExternalLink, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const navigationItems = [
    {
      title: "Грузовики",
      description: "Изучите все доступные грузовики и их характеристики",
      href: "/ets/trucks",
      icon: Truck,
      image: "/images/nav/trucks.jpg"
    },
    {
      title: "Прицепы",
      description: "Каталог прицепов с техническими характеристиками",
      href: "/ets/trailers",
      icon: Package,
      image: "/images/nav/trailers.jpg"
    },
    {
      title: "Карты",
      description: "Все доступные карты, страны и города",
      href: "/ets/maps",
      icon: MapIcon,
      image: "/images/nav/maps.jpg"
    },
    {
      title: "Автосалоны",
      description: "Расположение автосалонов по всей Европе",
      href: "/ets/carDealerships",
      icon: Car,
      image: "/images/nav/dealerships.jpg"
    },
    {
      title: "DLC",
      description: "Дополнения и расширения для игры",
      href: "/ets/dlcs",
      icon: Download,
      image: "/images/nav/dlc.jpg"
    }
  ];

  const resourceLinks = [
    {
      title: "Fandom Euro Truck Simulator 2",
      url: "https://truck-simulator.fandom.com/ru/wiki/Euro_Truck_Simulator_2",
      description: "Вики-энциклопедия по игре"
    },
    {
      title: "Fandom American Truck Simulator",
      url: "https://truck-simulator.fandom.com/ru/wiki/American_Truck_Simulator",
      description: "Вики-энциклопедия по ATS"
    },
    {
      title: "Официальный сайт SCS Software",
      url: "https://www.scssoft.com/",
      description: "Разработчик игры"
    },
    {
      title: "Официальный форум SCS Software",
      url: "https://forum.scssoft.com/index.php",
      description: "Сообщество игроков"
    }
  ];

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center">
      <HeroGeometric />
      
      {/* Navigation Cards */}
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Разделы Euro Truck Simulator 2</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучите все аспекты игры: от грузовиков и прицепов до карт и DLC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  {/* Placeholder background for image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                    <item.icon className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-30">
                    <h3 className="text-white font-semibold text-xl mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Resource Links */}
        <div className="space-y-8">
          <Separator />
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
              <Globe className="h-6 w-6" />
              Полезные ресурсы
            </h2>
            <p className="text-muted-foreground">
              Официальные и сообщественные ресурсы для игроков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resourceLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Separator />
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
              <Mail className="h-6 w-6" />
              Контакты
            </h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Связаться с разработчиком</p>
                    <a 
                      href="mailto:ghostypmp@gmail.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      ghostypmp@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
