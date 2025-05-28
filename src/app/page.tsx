import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Truck,
  Package,
  MapIcon,
  Car,
  Download,
  ExternalLink,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const navigationItems = [
    {
      title: "Грузовики",
      description: "Изучите все доступные грузовики и их характеристики",
      href: "/trucks",
      icon: Truck,
      image: "/images/nav/nav_trucks.png",
    },
    {
      title: "Прицепы",
      description: "Каталог прицепов с техническими характеристиками",
      href: "/trailers",
      icon: Package,
      image: "/images/nav/nav_trailers.png",
    },
    {
      title: "Карта",
      description: "Все доступные страны и города",
      href: "/maps",
      icon: MapIcon,
      image: "/images/map/map_full.jpg",
    },
    {
      title: "Автосалоны",
      description: "Расположение автосалонов по всей Европе",
      href: "/carDealerships",
      icon: Car,
      image: "/images/nav/nav_dealers.png",
    },
    {
      title: "DLC",
      description: "Дополнения и расширения для игры",
      href: "/dlcs",
      icon: Download,
      image: "/images/nav/nav_dlc.jpg",
    },
  ];

  const resourceLinks = [
    {
      title: "Fandom Euro Truck Simulator 2",
      url: "https://truck-simulator.fandom.com/ru/wiki/Euro_Truck_Simulator_2",
      description: "Вики-энциклопедия по игре",
    },
    {
      title: "Официальный сайт SCS Software",
      url: "https://www.scssoft.com/",
      description: "Разработчик игры",
    },
    {
      title: "Официальный форум SCS Software",
      url: "https://forum.scssoft.com/index.php",
      description: "Сообщество игроков",
    },
    {
      title: "Форум Euro Truck Simulator 2",
      url: "https://forum.scssoft.com/viewforum.php?f=3",
      description: "Дополнения и расширения для игры",
    },
  ];

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center">
      <HeroGeometric />

      {/* Navigation Cards */}
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight" id="pididi">
            Euro Truck Simulator 2
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Euro Truck Simulator 2 — игра в жанре симулятора дальнобойщика с элементами экономической стратегии. Разрабатывается и издается чешской компанией SCS Software. 
            Официальный релиз состоялся 18 октября 2012 года, в Steam игра вышла в январе 2013. Является продолжением Euro Truck Simulator, который увидел свет в 2008 году.
            Игра была создана на собственном движке SCS Software «Prism3D», который был серьезно доработан и оптимизирован. Совершенствование движка ведется параллельно с разработкой новых дополнений.
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
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Resource Links */}
        <div className="space-y-8 mb-12">
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
              <Card
                key={index}
                className="hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </main>
  );
}
