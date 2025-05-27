"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import etsData from "@/lib/mock/ets"

export default function TrucksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedManufacturer, setSelectedManufacturer] = useState("all")

  const manufacturers = useMemo(() => {
    return [...new Set(etsData.trucks.map(truck => truck.manufacturer))].sort()
  }, [])

  const filteredAndGroupedTrucks = useMemo(() => {
    let filtered = etsData.trucks.filter(truck => {
      const matchesSearch = truck.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          truck.model.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesManufacturer = selectedManufacturer === "all" || truck.manufacturer === selectedManufacturer
      return matchesSearch && matchesManufacturer
    })

    const grouped = manufacturers.reduce((acc, manufacturer) => {
      const manufacturerTrucks = filtered.filter(truck => truck.manufacturer === manufacturer)
      if (manufacturerTrucks.length > 0) {
        acc[manufacturer] = manufacturerTrucks
      }
      return acc
    }, {} as Record<string, typeof etsData.trucks>)

    return grouped
  }, [searchTerm, selectedManufacturer])

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Грузовики ETS2</h1>
        <p className="text-xl text-muted-foreground">
          Изучите все доступные грузовики в Euro Truck Simulator 2
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по производителю или модели..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Фильтр по производителю" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все производители</SelectItem>
              {manufacturers.map(manufacturer => (
                <SelectItem key={manufacturer} value={manufacturer}>
                  {manufacturer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Trucks by Manufacturer */}
      <div className="space-y-12">
        {Object.entries(filteredAndGroupedTrucks).map(([manufacturer, trucks]) => (
          <div key={manufacturer} className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">{manufacturer}</h2>
              <Separator className="mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trucks.map((truck, index) => {
                const truckSlug = `${truck.manufacturer}-${truck.model}`.toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link key={`${truck.manufacturer}-${truck.model}-${index}`} href={`/ets/trucks/${truckSlug}`}>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 group">
                      <CardContent className="p-0">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                          <Image
                            src={truck.imagePath}
                            alt={`${truck.manufacturer} ${truck.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-semibold text-lg">{truck.model}</h3>
                          <Badge variant="secondary" className="mt-2">
                            {truck.manufacturer}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {Object.keys(filteredAndGroupedTrucks).length === 0 && (
        <div className="text-center py-12">
          <Truck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Грузовики не найдены</h3>
          <p className="text-muted-foreground">
            Попробуйте изменить критерии поиска или фильтры
          </p>
        </div>
      )}
    </div>
  )
}