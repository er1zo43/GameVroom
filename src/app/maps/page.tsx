"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, MapIcon, Globe, Building, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import etsData from "@/lib/mock/ets"

export default function MapsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMap, setSelectedMap] = useState("all")

  const getMapName = (map: typeof etsData.maps[0]) => {
    if (map.type === "BASE_GAME") return "Базовая игра"
    return map.name || "N/A"
  }

  const mapNames = useMemo(() => {
    return [...new Set(etsData.maps.map(getMapName))].sort()
  }, [])

  const filteredMaps = useMemo(() => {
    return etsData.maps.filter(map => {
      const mapName = getMapName(map)
      const matchesMap = selectedMap === "all" || mapName === selectedMap
      
      if (!searchTerm) return matchesMap

      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = 
        mapName.toLowerCase().includes(searchLower) ||
        map.countries.some(country => 
          country.name.toLowerCase().includes(searchLower) ||
          country.capital.name.toLowerCase().includes(searchLower) ||
          country.cities.some(city => city.name.toLowerCase().includes(searchLower))
        )
      
      return matchesMap && matchesSearch
    })
  }, [searchTerm, selectedMap])

  const getTypeVariant = (type: string) => {
    return type === "BASE_GAME" ? "default" : "secondary"
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Карта ETS2</h1>
        <p className="text-xl text-muted-foreground">
          Изучите все доступные карты и локации в Euro Truck Simulator 2
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по группе, стране или городу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedMap} onValueChange={setSelectedMap}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Фильтр по карте" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все карты</SelectItem>
              {mapNames.map(mapName => (
                <SelectItem key={mapName} value={mapName}>
                  {mapName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Maps List */}
      <div className="space-y-8">
        {filteredMaps.map((map, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapIcon className="h-6 w-6" />
                  {getMapName(map)}
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Map Image */}
              {map.imagePath && (
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={map.imagePath}
                    alt={`Карта ${getMapName(map)}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Countries and Cities */}
              <div className="space-y-6">
                {map.countries.map((country, countryIndex) => (
                  <div key={countryIndex} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{country.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {getMapName(map)}
                      </Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {/* Capital first */}
                      <Card className="p-4 border-2 border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-4 w-4 text-primary" />
                          <span className="font-medium text-primary">Столица</span>
                        </div>
                        <h4 className="font-semibold text-lg">{country.capital.name}</h4>
                      </Card>
                      
                      {/* Other cities */}
                      {country.cities
                        .filter(city => city.name !== country.capital.name)
                        .map((city, cityIndex) => (
                        <Card key={cityIndex} className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Город</span>
                          </div>
                          <h4 className="font-semibold">{city.name}</h4>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaps.length === 0 && (
        <div className="text-center py-12">
          <MapIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Карты не найдены</h3>
          <p className="text-muted-foreground">
            Попробуйте изменить критерии поиска или фильтры
          </p>
        </div>
      )}
    </div>
  )
}