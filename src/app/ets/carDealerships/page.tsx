"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Car, MapPin, Building, ArrowLeft } from "lucide-react"
import Link from "next/link"
import etsData from "@/lib/mock/ets"

export default function CarDealershipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedManufacturer, setSelectedManufacturer] = useState("all")

  const manufacturers = useMemo(() => {
    return [...new Set(etsData.carDealerships.map(dealer => dealer.name))].sort()
  }, [])

  const filteredDealerships = useMemo(() => {
    return etsData.carDealerships.filter(dealership => {
      const matchesManufacturer = selectedManufacturer === "all" || dealership.name === selectedManufacturer
      
      if (!searchTerm) return matchesManufacturer

      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = 
        dealership.name.toLowerCase().includes(searchLower) ||
        dealership.locations.some(location => 
          location.country.toLowerCase().includes(searchLower) ||
          location.cities.some(city => city.toLowerCase().includes(searchLower))
        )
      
      return matchesManufacturer && matchesSearch
    })
  }, [searchTerm, selectedManufacturer])

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/ets">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Автосалоны ETS2</h1>
        <p className="text-xl text-muted-foreground">
          Найдите ближайший автосалон для покупки грузовиков в Euro Truck Simulator 2
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по производителю или стране..."
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

      {/* Dealerships */}
      <div className="space-y-12">
        {filteredDealerships.map((dealership, index) => (
          <div key={index} className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold flex items-center justify-center gap-3">
                <Car className="h-8 w-8" />
                {dealership.name}
              </h2>
              <Separator className="mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealership.locations.map((location, locationIndex) => (
                <Card key={locationIndex} className="hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {location.country}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Автосалоны в городах:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.cities.map((city, cityIndex) => (
                          <Badge key={cityIndex} variant="secondary" className="text-sm">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <Badge variant="outline" className="text-xs">
                        {dealership.name} - {location.cities.length} {location.cities.length === 1 ? 'салон' : 'салонов'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredDealerships.length === 0 && (
        <div className="text-center py-12">
          <Car className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Автосалоны не найдены</h3>
          <p className="text-muted-foreground">
            Попробуйте изменить критерии поиска или фильтры
          </p>
        </div>
      )}
    </div>
  )
}