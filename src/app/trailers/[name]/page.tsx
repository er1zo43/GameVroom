"use client";

import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck, Package, Ruler, Weight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import etsData from "@/lib/mock/ets";

interface TrailerDetailPageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function TrailerDetailPage({ params }: TrailerDetailPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const trailer = etsData.trailers.find(
    (t) =>
      `${t.manufacturer}-${t.model}`.toLowerCase().replace(/\s+/g, "-") ===
      decodedName.toLowerCase(),
  );

  if (!trailer) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/trailers">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к прицепам
          </Button>
        </Link>
      </div>

      {/* Main Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {trailer.manufacturer} {trailer.model}
        </h1>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {trailer.manufacturer}
          </Badge>
          <Badge variant="outline" className="text-lg px-3 py-1">
            {trailer.bodyType}
          </Badge>
        </div>
      </div>

      {/* Main Trailer Image */}
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={trailer.imagePath}
            alt={`${trailer.manufacturer} ${trailer.model}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Card>

      {/* Trailer Information Grid */}
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
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Производитель</p>
                <p className="font-semibold">{trailer.manufacturer}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Модель</p>
                <p className="font-semibold">{trailer.model}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Тип прицепа</p>
                <p className="font-semibold">{trailer.trailerType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Тип кузова</p>
                <p className="font-semibold">{trailer.bodyType}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Weight className="h-5 w-5" />
              Технические характеристики
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Снаряженная масса
                </p>
                <p className="font-semibold">{trailer.curbWeight} кг</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Общая длина</p>
                <p className="font-semibold">{trailer.overallLength} мм</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Количество осей</p>
                <p className="font-semibold">{trailer.numberOfAxles}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Подъемных осей</p>
                <p className="font-semibold">{trailer.numberOfLiftAxles}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Управляемых осей
                </p>
                <p className="font-semibold">{trailer.numberOfSteeredAxles}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Body Dimensions Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Ruler className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Внутренние размеры кузова</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Длина</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {trailer.bodyInternalDimensions.length}
              </p>
              <p className="text-sm text-muted-foreground">миллиметров</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Ширина</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {trailer.bodyInternalDimensions.width}
              </p>
              <p className="text-sm text-muted-foreground">миллиметров</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Высота</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {trailer.bodyInternalDimensions.height > 0
                  ? trailer.bodyInternalDimensions.height
                  : "Н/Д"}
              </p>
              <p className="text-sm text-muted-foreground">
                {trailer.bodyInternalDimensions.height > 0
                  ? "миллиметров"
                  : "не применимо"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cargo Types Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Типы перевозимых грузов</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trailer.cargoTypesTransported.map((cargoType, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border"
                >
                  <Package className="h-5 w-5 text-primary" />
                  <span className="font-medium">{cargoType}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Дополнительная информация
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Характеристики шасси</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Общее количество осей:
                  </span>
                  <span className="font-medium">{trailer.numberOfAxles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Подъемные оси:</span>
                  <span className="font-medium">
                    {trailer.numberOfLiftAxles}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Управляемые оси:
                  </span>
                  <span className="font-medium">
                    {trailer.numberOfSteeredAxles}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Размеры и вес</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Снаряженная масса:
                  </span>
                  <span className="font-medium">{trailer.curbWeight} кг</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Общая длина:</span>
                  <span className="font-medium">
                    {trailer.overallLength} мм
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Объем кузова:</span>
                  <span className="font-medium">
                    {trailer.bodyInternalDimensions.height > 0
                      ? `${Math.round((trailer.bodyInternalDimensions.length * trailer.bodyInternalDimensions.width * trailer.bodyInternalDimensions.height) / 1000000)} м³`
                      : "Н/Д"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center pt-8">
        <Link href="/trailers">
          <Button variant="outline" size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться к списку прицепов
          </Button>
        </Link>
      </div>
    </div>
  );
}
