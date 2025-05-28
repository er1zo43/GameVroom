"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Cog, Settings, Wrench, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import etsData from "@/lib/mock/ets"

interface TruckDetailPageProps {
  params: {
    name: string
  }
}

export default function TruckDetailPage({ params }: TruckDetailPageProps) {
  const decodedName = decodeURIComponent(params.name)
  const truck = etsData.trucks.find(t => 
    `${t.manufacturer}-${t.model}`.toLowerCase().replace(/\s+/g, '-') === decodedName.toLowerCase()
  )

  if (!truck) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/trucks">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к грузовикам
          </Button>
        </Link>
      </div>

      {/* Main Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {truck.manufacturer} {truck.model}
        </h1>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {truck.manufacturer}
          </Badge>
          <Badge variant="outline" className="text-lg px-3 py-1">
            {truck.releaseDate.getFullYear()}
          </Badge>
        </div>
      </div>

      {/* Main Truck Image */}
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={truck.imagePath}
            alt={`${truck.manufacturer} ${truck.model}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Card>

      {/* Truck Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Основная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Производитель</p>
                <p className="font-semibold">{truck.manufacturer}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Модель</p>
                <p className="font-semibold">{truck.model}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Дата выпуска</p>
                <p className="font-semibold">{truck.releaseDate.toLocaleDateString('ru-RU')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Год в игре</p>
                <p className="font-semibold">{truck.releaseDate.getFullYear()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Краткая статистика</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Двигателей</p>
                <p className="font-semibold text-lg">{truck.engines.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Коробок передач</p>
                <p className="font-semibold text-lg">{truck.transmissions.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Шасси</p>
                <p className="font-semibold text-lg">{truck.chassis.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Кабин</p>
                <p className="font-semibold text-lg">{truck.cabins.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Engines Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Cog className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Двигатели</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {truck.engines.map((engine, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{engine.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Мощность</p>
                    <p className="font-semibold">{engine.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Крутящий момент</p>
                    <p className="font-semibold">{engine.torque}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Стоимость</p>
                    <p className="font-semibold">€{engine.cost.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Уровень разблокировки</p>
                    <Badge variant="outline">{engine.unlockLevel}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Transmissions Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Коробки передач</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {truck.transmissions.map((transmission, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{transmission.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Передач</p>
                    <p className="font-semibold">{transmission.gears}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Передаточные числа</p>
                    <p className="font-semibold text-sm">{transmission.ratioValues}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Финальная передача</p>
                    <p className="font-semibold">{transmission.finalDriveRatio}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Стоимость</p>
                    <p className="font-semibold">€{transmission.cost.toLocaleString()}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Badge variant="outline">Уровень {transmission.unlockLevel}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Chassis Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Wrench className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Шасси</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {truck.chassis.map((chassis, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Шасси {chassis.wheelFormula}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Колесная формула</p>
                    <p className="font-semibold">{chassis.wheelFormula}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Всего осей</p>
                    <p className="font-semibold">{chassis.totalNumberOfAxles}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ведущих осей</p>
                    <p className="font-semibold">{chassis.numberOfDrivenAxles}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Колесная база</p>
                    <p className="font-semibold">{chassis.wheelbase}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Стоимость</p>
                    <p className="font-semibold">€{chassis.cost.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Уровень</p>
                    <Badge variant="outline">{chassis.unlockLevel}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cabins Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Кабины</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {truck.cabins.map((cabin, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{cabin.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Стоимость</p>
                    <p className="font-semibold">€{cabin.cost.toLocaleString()}</p>
                  </div>
                  <Badge variant="outline">Уровень {cabin.unlockLevel}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center pt-8">
        <Link href="/trucks">
          <Button variant="outline" size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться к списку грузовиков
          </Button>
        </Link>
      </div>
    </div>
  )
}